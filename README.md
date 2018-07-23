# MyRubySnippets

[Live Site]()

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/v1532379887/MyRubySnippets/ReadMe/ezgif.com-video-to-gif_2.gif)

MyRubySnippets is a cloud-based IDE for writing and running Ruby Code in your browser, and allows users to easily collaborate with team members and see each other type in real time.

### Features
* Single-page web application with a `Rails` RESTful API built with `React` and `Redux`.
* Integrated with the `OmniAuth` library for multi-provider authentication, including Google, GitHub, and LinkedIn.
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_450/v1532226401/MyRubySnippets/ReadMe/omniauth_login.png)
* Collaborate with team members by simply sharing the unique `snippet` link - others do not need to create an account in order to work on a snippet with you.
* `ActionCable` is used to implement WebSockets and allows users to see each other type in real time.
* Embedded Ace code editor.

### Code Spotlight

**Real Time Programming with ActionCable**
* A `snippet` can be worked on by multiple users simultaneously and users can see each other type in real time. This is achieved by using `ActionCable` to implement WebSockets.

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_550/v1532384877/MyRubySnippets/ReadMe/snippet_jsx_componendDidMount.png)

* Users must be authenticated in order to create a `snippet`. 
* When a `snippet` is created, a unique link is generated that can be shared and used to pair program with anyone - no login is required to work on a snippet.
* Every user on the snippet becomes a `subscriber` to its channel. As a user types, changes are `broadcasted` via the `onChange` event and all other users on this snippet can see the typing in real time.

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_425/v1532384865/MyRubySnippets/ReadMe/snippet_jsx_onChange.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_475/v1532384830/MyRubySnippets/ReadMe/snippet_channel.png)

### ToDo
* Add a Reset Link feature to let users generate a new unique snippet link when they no longer want others to access a certain snippet.
* Enhance Snippet collaboration with a list of all users currently working on a snippet.
* Allow users to track changes made by each team member.
