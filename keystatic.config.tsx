import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: (import.meta.env?.DEV || process.env.NODE_ENV === 'development')
    ? { kind: 'local' }
    : { kind: 'github', repo: 'jggalviz/VortexLM' },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción SEO', multiline: true }),
        pubDate: fields.date({ label: 'Fecha de Publicación' }),
        author: fields.text({ label: 'Autor', defaultValue: 'VortexLM' }),
        category: fields.text({ label: 'Categoría' }),
        image: fields.image({
          label: 'Imagen de Portada',
          directory: 'public/images/blog',
          publicPath: '/images/blog/'
        }),
        content: fields.mdx({
          label: 'Contenido',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),
  },
});
