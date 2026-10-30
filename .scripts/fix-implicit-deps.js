const fs = require('fs');
const path = require('path');

function findPackages(dir) {
	const results = [];
	try {
		const items = fs.readdirSync(dir, { withFileTypes: true });

		for (const item of items) {
			if (item.isDirectory()) {
				const pkgPath = path.join(dir, item.name, 'package.json');
				const projPath = path.join(dir, item.name, 'project.json');

				if (fs.existsSync(pkgPath) && fs.existsSync(projPath)) {
					results.push({ name: item.name, pkgPath, projPath, dir: path.join(dir, item.name) });
				}

				// Check subdirectories (for plugins)
				const subDir = path.join(dir, item.name);
				try {
					const subItems = fs.readdirSync(subDir, { withFileTypes: true });
					for (const subItem of subItems) {
						if (subItem.isDirectory()) {
							const subPkgPath = path.join(subDir, subItem.name, 'package.json');
							const subProjPath = path.join(subDir, subItem.name, 'project.json');
							if (fs.existsSync(subPkgPath) && fs.existsSync(subProjPath)) {
								results.push({
									name: subItem.name,
									pkgPath: subPkgPath,
									projPath: subProjPath,
									dir: path.join(subDir, subItem.name)
								});
							}
						}
					}
				} catch (e) {}
			}
		}
	} catch (e) {
		console.error('Error scanning directory:', e.message);
	}
	return results;
}

const packages = findPackages('packages');
console.log('Found', packages.length, 'packages');

const dinaryPkgNameToNxName = {
	'@dinary/constants': 'constants',
	'@dinary/contracts': 'contracts',
	'@dinary/common': 'common',
	'@dinary/utils': 'utils',
	'@dinary/config': 'config',
	'@dinary/plugin': 'plugin',
	'@dinary/auth': 'auth',
	'@dinary/core': 'core',
	'@dinary/ui-core': 'ui-core',
	'@dinary/ui-config': 'ui-config',
	'@dinary/ui-auth': 'ui-auth',
	'@dinary/desktop-lib': 'desktop-lib',
	'@dinary/desktop-ui-lib': 'desktop-ui-lib',
	'@dinary/desktop-window': 'desktop-window',
	'@dinary/desktop-core': 'desktop-core',
	'@dinary/desktop-activity': 'desktop-activity',
	'@dinary/mcp-server': 'mcp-server',
	'@dinary/plugin-integration-ai': 'plugin-integration-ai',
	'@dinary/plugin-integration-github': 'plugin-integration-github',
	'@dinary/plugin-integration-hubstaff': 'plugin-integration-hubstaff',
	'@dinary/plugin-integration-upwork': 'plugin-integration-upwork',
	'@dinary/plugin-job-proposal': 'plugin-job-proposal',
	'@dinary/plugin-job-search': 'plugin-job-search'
};

let fixedCount = 0;

for (const pkg of packages) {
	try {
		const pkgJson = JSON.parse(fs.readFileSync(pkg.pkgPath, 'utf8'));
		const projJson = JSON.parse(fs.readFileSync(pkg.projPath, 'utf8'));

		const deps = { ...pkgJson.dependencies, ...pkgJson.peerDependencies };
		const dinaryDeps = Object.keys(deps).filter((d) => d.startsWith('@dinary/'));

		const nxNames = dinaryDeps.map((d) => dinaryPkgNameToNxName[d]).filter(Boolean);
		const currentImplicit = projJson.implicitDependencies || [];

		const expected = [...new Set([...currentImplicit, ...nxNames])].sort();

		const missing = expected.filter((e) => !currentImplicit.includes(e));

		if (missing.length > 0) {
			projJson.implicitDependencies = expected;
			fs.writeFileSync(pkg.projPath, JSON.stringify(projJson, null, '\t') + '\n');
			console.log('Fixed:', pkg.name, '- added:', missing.join(', '));
			fixedCount++;
		}
	} catch (e) {
		console.error('Error processing', pkg.name, ':', e.message);
	}
}

console.log('\nTotal fixed:', fixedCount);
