# Spaghetti

Endless page for Rails > 3.1 using jQuery Sausage.
Spaghetti supports both [Kaminari](https://github.com/amatsuda/kaminari) and [will_paginate](https://github.com/mislav/will_paginate).

## Installation

Add this line to your application's Gemfile:

    gem 'spaghetti'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install spaghetti

## Usage

Make sure you add spaghetti JavaScript to your `application.js`:
    
    //= require spaghetti

Then add spaghetti markup to your view (example: posts/index.html):
    
    <%= spaghetti 'posts', posts_path %>
    
You need to have your `posts_controller` responding with the following `index.js.erb` file:
    
    <%= spaghetti 'posts', @posts %>


## Contributing

Please see CONTRIBUTING.md for details.

##Credits
spaghetti was originally written by Omar Abdel-Wahab.

![RSM](http://rayasocialmedia.com/images/logo.png)

spaghetti is maintained and funded by Raya Social Media.

## License
spaghetti is Copyright © 2013 Raya Social Media. It is free software, and may be redistributed under the terms specified in the LICENSE file.