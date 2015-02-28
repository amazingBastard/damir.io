# DAMIR.IO

A software development blog by Damir Vazgird

<!-- toc -->

* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

<!-- toc stop -->

Demo here: [damir.meteor.com](http://damir.meteor.com).

## How to use

###Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

###Installation

```
git clone git@github.com:amazingBastard/damir.io.git
cd damir.io
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

### SEO and other concerns

> Meteor cannot do SEO

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. Use constants under
__client/lib/constants.js__ for the app. Change SEO settings inside the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to
__server/config/security.js__

```javascript
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) and
[matteodem:easy-security](https://github.com/matteodem/meteor-easy-security) have also been added.

## Structure

### Packages used

* Meteor Core
  * standard-app-packages
* Routing
  * iron:router
  * zimme:iron-router-active
* Collections
  * aldeed:collection2
  * dburles:collection-helpers
* Accounts
  * accounts-password
  * useraccounts:semantic-ui
* UI and UX
  * fastclick
  * meteorhacks:fast-render
  * natestrauser:animate-css
  * nooitaf:semantic-ui-less
  * markdown
* Security
  * browser-policy
  * audit-argument-checks
  * matteodem:easy-security
* SEO
  * manuelschoebel:ms-seo
* Development
  * less
  * jquery
  * underscore
  * raix:handlebar-helpers

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more(*)
	views/			    # Contains all views(*)
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection(*)
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
meteor-boilerplate		# Command line tool
```

(*) = the command line tool creates files in these folders

## License
This project has an MIT License, see the LICENSE.txt for more information.
