import React from 'react';
import { connect } from 'react-redux';


import LoginFormContainer from '../../components/session_form/login_form_container';
import SignupFormContainer from '../../components/session_form/signup_form_container';
// import CartContainer from '../cart/cart_container';
import CheckoutContainer from '../cart/cart_checkout_container'
import SearchContainer from '../search/search_container'



// function Modal({ modal, closeModal }) {
//     if (!modal) {
//         return null;
//     }
//     let component;
//     switch (modal) {
//         case 'login':
//             component = <LoginFormContainer />;
//             break;
//         case 'signup':
//             component = <SignupFormContainer />
//             break;
//         case 'checkout':
//             component = <CheckoutContainer />
//             break;
//         case 'search':
//             component = <SearchContainer />
//             break;
//         default:
//             return null;
//     }

//     return (
//         <div className="modal-screen" onClick={closeModal}>
//             <div className="modal-child" onClick={e => e.stopPropagation()}>
//                 {component}
//             </div>
//         </div>
//     )
// };



class Modal extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchProducts()
    }


    render() {
        const { modal, closeModal } = this.props;

        if (!modal) {
            return null;
        }

        let component;
        switch (modal) {
            case 'login':
                component = <LoginFormContainer />;
                break;
            case 'signup':
                component = <SignupFormContainer />
                break;
            case 'checkout':
                component = <CheckoutContainer />
                break;
            case 'search':
                component = <SearchContainer />
                break;
            default:
                return null;
        }

        return (
            <div className="modal-screen" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }

}



export default Modal;