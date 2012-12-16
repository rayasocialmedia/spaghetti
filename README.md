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

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
