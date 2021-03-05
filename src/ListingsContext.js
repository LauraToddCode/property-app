import React, { createContext } from "react";

export const ListingsContext = createContext();

export class ListingsProvider extends React.Component {
    state = {
        clickedId: "",
    }

    render() {
        
        return(
            <ListingsContext.Provider value={{
                state: this.state,
                getId: (event) => {
                    this.setState({
                        clickedId: event.currentTarget.id
                    })
                }
            }}>
                {this.props.children}
            </ListingsContext.Provider>
        )
    }
}