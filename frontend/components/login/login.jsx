import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount")
        console.log(this.props.loggedIn)
        
        if (this.props.loggedIn) {
            this.props.history.push("/home");
        }
    }

    render() {
        return (
            <div class="login-parent">
                <div class="login text-center">
                    <h1 class="login-h1">MyRubySnippets</h1>

                    <p>A cloud-based IDE for writing and running Ruby code in your browser</p>
                    
                    <p class="get-started">Log in to get started</p>

                    <div class="buttons-div">
                        <a href="/auth/google_oauth2" class="btn btn-social btn-google text-white">
                            <span class="fab fa-google text-white"></span>
                            Sign in with Google
                        </a>

                        <a href="/auth/github" class="btn btn-social btn-github text-white">
                            <span class="fab fa-github text-white"></span>
                            Sign in with GitHub
                        </a>

                        <a href="/auth/linkedin" class="btn btn-social btn-linkedin text-white">
                            <span class="fab fa-linkedin text-white"></span>
                            Sign in with LinkedIn
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;

// 

// wow auction house

// - react app, living inside of a rails app
// - rails server-side authentication
//   -> the server knows who the current user (think erb views)

// # login
//   session[:current_user_id] = @current_user.id
// # logout
//   session[:current_user_id] = nil

// @current_user


// .html.erb

// <%= @current_user >

// <script type="text/javascript">
//   <%= if current_user >
//     window.current_user_id = current_user.id
//   <% end %>
// </script>

// <div id="root"></div>







// componentDidMount = () => {
//   if (window.current_user_id) {
//     this.props.setCurrentUser({current_user_id: window.current_user_id})
//   }
// }



// componentDidMount = () => {
//   $.ajax.fetch('/users/me')
// }