import React from "react";
import "./style.css";

class Item extends React.Component {
    
    iDelete() {
        console.log(this)
        //this.props.deleteItem.bind(this, this.props.data.id);
    }

    render() {
        const { data }  = this.props;
        return (
            <div className="item">
                <img src={data.image} className="item_img" alt="icon"></img>
                <h2 className="item_h2">{data.title}</h2>
                <p className="item_desc">{data.description}</p>

                <div className="item_det">
                    <p>{data.category}</p>
                    <p>Cost: ${data.price}</p>
                </div>

                <div className="item_footer" id={data.id}>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRNfl1BlGHX2vA4xDvpZvLfvmpkO-zpop1w&usqp=CAU"
                        alt="delete"
                        onClick={this.iDelete}
                    />
                    <img 
                        src="https://cdn.iconscout.com/icon/free/png-512/pencil-pen-ui-erase-tool-interface-ui-6-15152.png"
                        alt="edit"
                    />
                    
                    <img 
                        src="https://static.thenounproject.com/png/1957298-200.png"
                        alt="cartAdd"
                    />
                </div>
            </div>
        );
    }
}

export default Item;