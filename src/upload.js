import React from "react";


class UploadForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null
      };
  
      this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
    };
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        Age:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Sex:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label>
                        Site:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="headOrNeck">Head/Neck</option>
                            <option value="upper">Upper Extremity</option>
                            <option value="lower">Lower Extremity</option>
                            <option value="torso">Torso</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="imageUpload">
                    <img src={this.state.image} />
                    <h1>Upload Image</h1>
                    <input type="file" name="myImage" onChange={this.onImageChange} />
                </div>
            </div>
    )
}
}

export { UploadForm };