# MyRubySnippets

[Live Site]()

MyRubySnippets is a cloud-based IDE for writing and running Ruby Code in your browser, and allows users to easily collaborate with team members and see each other type in real time.

### Features
* Single-page web application with a `Rails` RESTful API built with `React` and `Redux`.
* Integrated with the OmniAuth library for multi-provider authentication, including Google, GitHub, and LinkedIn.
* Collaborate with team members by simply sharing the unique snippet link - others do not need to create an account in order to work on a snippet with you.
* ActionCable is used to implement WebSockets and allows users to see each other type in real time.
* Embedded Ace code editor.

### Code Spotlight

**Real Time Programming with ActionCable**

### ToDo
* Add a Reset Link feature to let users generate a new unique snippet link when they no longer want others to access a certain snippet.
* Enhance Snippet collaboration with a list of all users currently working on a snippet.
* Allow users to track changes made by each team member.
