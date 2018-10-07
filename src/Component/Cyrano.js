import React, { Component } from 'react';
import './Cyrano.css';

class Cyrano extends Component {
    render(){
        return(
            <div className="Cyrano">
                <div className="Cyrano_Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Cyrano_header">
                        <p>Date: {this.props.date}</p>
                        <p>Author: {this.props.author}</p>
                    </div>
                    <p>{this.props.contents}</p>
                    <div className="Cyrano_value">
                        <p>
                            Score: {this.props.score}&nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                            : {this.props.like}</p>
                    </div>
                    <button className="Cyrano_Button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
                    </button>
                    <button className="Cyrano_Button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
                    </button>
                </div>
            </div>
        );
    }

}
export default Cyrano;