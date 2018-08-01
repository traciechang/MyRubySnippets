# MyRubySnippets

[Live Site](https://mysterious-ridge-80923.herokuapp.com/)

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/v1532379887/MyRubySnippets/ReadMe/ezgif.com-video-to-gif_2.gif)

MyRubySnippets is a cloud-based IDE for writing and running Ruby code in your browser, and allows users to easily collaborate with team members and see each other type in real time.

### Features
* Single-page web application with a `Rails` RESTful API built with `React` and `Redux`.
* Integrated with the `OmniAuth` library for multi-provider authentication, including Google, GitHub, and LinkedIn.
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_450/v1532226401/MyRubySnippets/ReadMe/omniauth_login.png)
* Collaborate with team members by simply sharing a unique `snippet` link - others do not need to create an account in order to work on a snippet with you.
* With the use of Rails' `ActionCable` to create pub/sub WebSocket connections in the app, users can see each other type in real time.
* Embedded Ace code editor.

### Code Spotlights

**Open3 Module for Executing Ruby Code**
* Ruby’s `Open3` module is used to capture standard `input` and standard error.

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_525/v1532466259/MyRubySnippets/ReadMe/outputs_controller.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_600/v1532466259/MyRubySnippets/ReadMe/code_executor_rb_call.png)

**Real Time Programming with ActionCable**
* A `snippet` can be worked on by multiple users simultaneously and users can see each other type in real time. This is achieved by using `ActionCable` to implement WebSockets.

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_550/v1532384877/MyRubySnippets/ReadMe/snippet_jsx_componendDidMount.png)

* Users must be authenticated in order to create a `snippet`. 
* When a `snippet` is created, a unique link is generated that can be shared and used to pair program with anyone - no login is required to work on a snippet.
* Every user on the snippet becomes a `subscriber` to its channel. As a user types, changes are `broadcasted` via the `onChange` event and all other users on this snippet can see the typing in real time.
* Initially, `onChange` would occur on every key press, which would `send` changes to the backend. The `handleReceiveSnippet` callback was then used to update the component with the new state.
* Since Heroku is slower in handling broadcasted events, the broadcasting was limited to only after 300 milliseconds of inactivity. This solved the problem of any inconsistencies that might have been experienced when people typed too quickly on a hobby tier of Heroku's hosting service. 

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_550/v1532875264/MyRubySnippets/ReadMe/snippet_jsx_handleReceiveSnippet_onChange.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_475/v1532384830/MyRubySnippets/ReadMe/snippet_channel.png)

### ToDo
* Add a Reset Link feature to let users generate a new unique snippet link when they no longer want others to access a certain snippet.
* Enhance Snippet collaboration with a list of all users currently working on a snippet.
* Allow users to track changes made by each team member.
