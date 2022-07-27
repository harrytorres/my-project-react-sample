
import Nav from '../partials/Nav'
import Footer from '../partials/Footer';

function Layout(props){
    return(
        <div>
            <Nav/>
            <main>
                {props.children}
            </main>
            <Footer/>

        </div>
    );
}

export default Layout