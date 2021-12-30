# rush-circleci-example

Example setup for using [rush](https://rushjs.io/) with [circleci](https://circleci.com/).

Included in this repository is a basic rush setup generated with `rush init` following their getting started guide with a basic circleci config file to perform common steps like testing alongside a publishing workflow. 

Rush isn’t a good fit for a repository with only a single package but this example hasn’t been expanded to support more yet. 

## CI Workflow 

On any branch the following steps will be run, 
* Execute tests 
* Lint 
* Check change log, `rush change —verify`
* Build 

These steps are all basic setups and could be exampled to include artefacts like test coverage. 

On main users can also run publish via rush, this requires approval allowing many changes to be bundled into a single release. This step is completely dependent on rush functionality with the appropriate flags for version, commit to git and publish via nom provided. 

## Prerequisites

Running this setup requires the following pre requests; 

* Context in circleci called `npm` with an environment variable for `NPM_AUTH_TOKEN`
* User ssh key configured for the project, the default deploy key doesn’t have push git permissions 

## Developer workflow 

More information can be found in the [rush documentation](https://rushjs.io/pages/developer/new_developer/).

### Updating an existing package 

Within a rush monorepo if you’re making changes to an existing project you’d need to;
* Create a branch
* Commit desired changes to various packages 
* Run `rush change` to create changes using the interactive cli prompt 
* Once passing, merge changes to master 
* Approve package publishing which will use the change logs to to semantically version your package and generate a changelog file

### Adding a new packages 

Adding a new package to the monorepo required; 
 * Package added to the `projects` options in `rush.json`
 * Run `rush update`

Check the [add to repo documentation](https://rushjs.io/pages/maintainer/add_to_repo/) for more detail 

## Rush Setup

As an example this uses a vanilla rush setup with pnpm. Changes which have been made from the base configuration; 

* Rush repository settings provided 
* Rush reviewCategories provided 
* Enabled pnpmOptions for workspaces and strict deps
* Added package to `projects`
* Configured `.npmrc-publish`
* Added custom test and lint steps to `command-line.json`

## TO DOs

Items outstanding from this setup;
* More than one package with a dependency on another
* Tidy up circleci  config 
* Publish packages as public not private 
