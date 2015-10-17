# Default Grunt Installation

Updated: 9/3/2015

Install the contents of this package into your project’s webroot.

## Requirements

- Node.js
- [Grunt.js installed globally](http://wiki.local/Grunt)
- Sass

## Included Tasks

- Sass compilation to CSS
- CSS/Sass sourcemapping (base.compiled.css)
- CSS Autoprefixing
- CSS Media Query Compressing
- CSS Minification
- JavaScript Concatentation
- JavaScript Minification
- LiveReload

## Watching Files

To have Grunt watch your files for changes, run this command from the build directory:

`grunt watch`

## Install Node Modules

The necessary node modules are no longer included in this repo.  Please run the following command from the build directory upon first use:

`npm install`

or

`sudo npm install`

## CSS Sourcemap

To use sourcemapping in your dev site, make sure to include `main.compiled.css` and not the minified version. Minification breaks the sourcemapping.

If you receive a Sass error complaining about being unable to write the map file, do the following:

1. Make sure the grunt-contrib-sass grunt module is up to date in `package.json`.
`"grunt-contrib-sass": "~0.8.1"` or greater.
2. Update your node modules:
`npm update`

## LiveReload

To use live reload, make sure you install the [appropriate browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions).

## Destination Folders

    |--- /css
    |   |--- main.compiled.css 			/* compiled css output for development */
    |   |--- main.compiled.min.css 		/* compiled, minified css output for production */
	|
    |-- /js
        |--- main.compiled.js 		/* concatenated, linted 3rd plugin/module code for development */
        |--- main.compiled.min.js 	/* concatenated, linted, minified 3rd plugin/module code for production */
    	|
    	|--- /elites  /* Not touched by Grunt - load independently of other scripts. */
        |--- /grunts /* processed by Grunt into grunts.compiled.js and grunts.compiled.min.js */     


## .hgignore

Add these lines to your .hgignore file in your project to prevent adding the sass cache and node modules to your repo:

    glob:*.sass-cache*
    glob:*node_modules*

All other files are fine to go in your repo.

## Development Dependencies

- [Grunt](http://gruntjs.com/) - [consult wiki](http://wiki.local/Grunt)
- [Sass](http://sass-lang.com/)
- [LiveReload Browser Extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions) (optional)

## HTML Jumpstart

### Header

    <!doctype html>
    <!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
    <!--[if IE 7]>    <html class="no-js lt-ie10 lt-ie9 lt-ie8" lang="en"> <![endif]-->
    <!--[if IE 8]>    <html class="no-js lt-ie10 lt-ie9" lang="en"> <![endif]-->
    <!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->
    <!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title>HTML Template</title>
        <meta name="description" content="">

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="/css/main.compiled.css">

        <!--[if lt IE 9]>
           <script src="js/elites/respond.min.js"></script>
       <![endif]-->

        <script src="/js/elites/modernizr-2.8.3.min.js"></script>

    </head>
    <body>

### Footer

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/js/elites/jquery-1.11.3.min.js"><\/script>')</script>

        <script src="/js/main.compiled.js"></script>

        <script>/*
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        */</script>

    </body>
    </html>