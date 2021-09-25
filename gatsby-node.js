import fs from 'fs'
import path from 'path'
import slugify from 'slugify'

async function mujeresPages({ graphql, actions }) {
    const mujerTemplate = path.resolve('./src/templates/mujer.js');
    const mujeres = await JSON.parse(await fs.promises.readFile('./content/mujeres.json'))    
    mujeres.forEach((mujer) => {
        actions.createPage({
            path: `mujer/${slugify(mujer.title)}`,
            component: mujerTemplate,
            context: {
                ...mujer
            },
        });
    });
}

export async function createPages(params) {
    // Create pages dynamically
    await Promise.all([
        mujeresPages(params),
    ]);
}




