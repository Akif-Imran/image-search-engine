import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    //issues a cross origin resource sharing request.(CORS)
    //response.data.results[].urls{full,raw,regular,small,small_s3,thumb}
    let response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
    //console.log(response.data.results);
  };

  render() {
    return (
      // <div className="ui container" style={styles.containerMargin}>
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// const styles = StyleSheet.create({
//   containerMargin: {
//     marginTop: "10px",
//   },
// });

export default App;
