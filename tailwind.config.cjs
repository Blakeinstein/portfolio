const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'sans': ['Red Hat Display', 'sans-serif']
		},
		extend: {
			typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
						h1: {
							marginBottom: '1rem',
						},
						h2: {
							margin: '0.5rem 0',
						},
						p: {
							margin: 0,
						},
          },
        },
      },
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
