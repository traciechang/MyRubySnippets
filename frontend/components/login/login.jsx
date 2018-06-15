import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("login, componentWillReceiveProps")
        if (nextProps.loggedIn) {
            this.props.history.push("/home");
        }
    }

    componentDidlMount() {
        console.log("Login, compoenent Did Mount")
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <h1>MyRubySnippets</h1>
                <a href="/auth/google_oauth2">Sign in with Google</a>

                {/* Home */}
                
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