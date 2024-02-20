https://jekyllrb.com/docs/step-by-step/01-setup/
Jekyll build
Jekyll serve

To setup new dev environment:

0. ensure ruby-build is 2022 or newer. openssl 1.1 is needed to build older ruby versions which is not handled by old rbenv. Also need to install ruby-dev to build jekyll in later steps.
```
wget -c https://github.com/rbenv/ruby-build/archive/refs/tags/v20240119.tar.gz
tar -xzf ruby-build-*.tar.gz
PREFIX=/usr/local ./ruby-build-*/install.sh
```
2. Install rbenv to manage older ruby version install, 'sudo apt install rbenv'. Newer version ruby install of Jekyll does not generate the site properly, need to use ruby version 2.7 despite what Jekyll docs say.
3. use rbenv to install ruby 2.7: 'rbenv install 2.7.0', then 'rbenv global 2.7.0' to set default version followed by 'rbenv rehash'.
4. Verify ruby verions by the following: Check that PATH contains $HOME/.rbenv/shims and $HOME/.rbenv/bin, 'env | grep PATH'. Also check that you have the following in your ~/.bash_profile if using bash or ~/.zshenv if using zsh: 'export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"'
5. If the above steps need to be corrected, restart terminal to have the proper paths be updated. Then, ruby --version should say 2.7.0.
6. cd to this repo local folder, do 'gem install jekyll bundler'.
7. I have added some jekyll plugins to reduce and compress images. Do bundle install to install the plugins from Gemfile. They are https://github.com/MichaelCurrin/jekyll-resize and https://github.com/valerijaspasojevic/jekyll-compress-images
8. jekyll-resize needs sudo apt install imagemagick as prerequisite. Install that if bundle install fails.
9. Jekyll serve to build and preview website locally.

**Due to using custom gems, this repo cannot be built by using the default github pages workflow, and needs github actions as described by https://stackoverflow.com/questions/51977736/how-to-install-use-jekyll-plugins-in-githubpages **
_In 2023, there is a better and straightforward solve to use custom plugins on Github Pages using Github Actions. All the steps are documented on the official page of Jekyll: https://jekyllrb.com/docs/continuous-integration/github-actions/. Reproducing the steps from the article above here:

Go to the Settings tab on your repository.
Under Code and automation, click Pages (last option).
Change Source under Build and deployment from Deploy from a branch to GitHub Actions.
Go to the Actions tab on your repository.
Start a New workflow and search for Jekyll.
Click Configure under the Jekyll workflow (NOT GitHub Pages Jekyll workflow).
Review the change and click Commit changes.
On pushing any local changes onto the default branch, the action will be triggered and the build will start.

The build might fail because of an error as below:

 Invalid date '<%= Time.now.strftime('%Y-%m-%d %H:%M:%S %z') %>': Document 'vendor/cache/gems/jekyll-3.2.1/lib/site_template/_posts/0000-00-00-welcome-to-jekyll.markdown.erb' does not have a valid date in the YAML front matter.
To fix this, place the line exclude: [vendor] in _config.yml. More discussion here: https://github.com/jekyll/jekyll/issues/5267._

Below is Bill Martin's documentation for his original template:
Source code for my [Jekyll](https://jekyllrb.com/)-based portfolio at [billmartin.io](http://billmartin.io), which uses the [Freelancer Jekyll Theme](https://github.com/jeromelachaud/freelancer-theme) with my own additions:

#### Resume Linking
The "Download Resume" button was added on the about page, which links to ```/resume/your-name-resume.pdf```

![Screenshot of "Download Resume" Button on About Page](/img/readme/resume_button.png)

#### Allow Blog Posts
In addition to the default portfolio posts, the ability to make blog posts has been added.

The new folder structure is:

![Screenshot of posts folder structure for blog and portfolio posts](/img/readme/posts_folder_structure.png)

![Screenshot of example blog grid view](/img/readme/blog_screenshot.png)

#### Support Tags on Portfolio Projects
The default Freelancer theme only supports client, date, application, and description fields for portfolio projects. I added a section to show languages, tools, concepts, & stack used for each project. They show up as tags.

![Screenshot of tags feature and markdown](/img/readme/tags.png)

#### Cute Icons
Relevant [Font Awesome](https://fortawesome.github.io/Font-Awesome/) were added to each header, overriding the default "star" icons.

![Screenshot of added header icons](/img/readme/icons.png)

## How to use
 - Fork or clone this repo to your own with name: ```your-github-username.github.io```
 - Overwrite profile picture in `/img/profile.jpg`
 - Replace `you@email.com` in `_includes/contact_static.html` with your email address. Refer to [formspree](http://formspree.io/) for more information.
 - Create new posts to display your projects & blog posts. See existing examples in ```_posts/blog/``` and ```_posts/portfolio/```
 - Update resume in ```/resume/your-name-resume.pdf```, and update ```_includes/about.html``` to reflect your resume file's name.
 - Push changes on master branch to remote
 - Go to your-github-username.github.io

## Demo
View this jekyll theme in action at [billmartin.io](http://billmartin.io)
