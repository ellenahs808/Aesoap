import React from 'react';

import LoginFormContainer from '../../components/session_form/login_form_container';
import SignupFormContainer from '../../components/session_form/signup_form_container';
import CartContainer from '../cart/cart_item_container';
import CheckoutContainer from '../cart/cart_checkout_container'
import CategorySidebarContainer from '../navbar/category_sidebar_container'
import SubCategorySidebarContainer from '../navbar/feature_container'
import SearchContainer from '../search/search_container'




class Modal extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchProducts()
    }


    render() {
        const { modal } = this.props;

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
            case 'cart':
                component = <CartContainer />
                break;
            case 'checkout':
                component = <CheckoutContainer />
                break;
            case 'sidebar':
                component = <CategorySidebarContainer />
                break;
            case 'search':
                component = <SearchContainer />
                break;
            case 'subcategory':
                component = <SubCategorySidebarContainer />;
            break;
            default:
                return null;
        }

        
        return (
            <div className="modal-screen" onClick={() => {this.props.closeModal(); this.props.closeSidebar()}}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }

}



export default Modal;