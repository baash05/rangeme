import './App.css'
import React from 'react'
import FlickerItem from './FlickerItem'
import Menu from './Menu'
import $ from "jquery"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {tag: '', items: []}

    this.handleChange = this.handleChange.bind(this)
    this.loadATaggedRecord = this.loadATaggedRecord.bind(this)
    this.loaderBreath = null // allow the user to type complete words
  }

  handleChange(event) {
    const text = event.target.value
    if(this.loaderBreath) clearTimeout(this.loaderBreath)
    this.loaderBreath = window.setTimeout(() => this.loadATaggedRecord(text), 300)
  }

  loadATaggedRecord(text) {
    if(text.length == 0){
      this.setState({tag: text, items: []})
      return
    }

    const self = this
    const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=";
    $.ajax({ url: url + text, dataType: "jsonp",
      jsonpCallback: 'jsonFlickrFeed',
      success: result => self.setState({tag: text, items: result.items})
    });
  }

  renderItems(){
    console.log("there are images " + this.state.items.length)
    return this.state.items.map((item, index) => (
    <FlickerItem
      key={index}
      id={index}
      author={item.author.match(/(?<=")[^"]+(?=")/)}
      date={item.date_taken}
      tags={item.tags}
      src={item.media.m.replace("_m", "_t")}
      url={item.media.m.replace("_m", "")} />
    ))
  }

  renderBlank() {
    return (
      <div>
        <h1>A Simple Set</h1>
        <img src="/IMG-0394.png" alt="David Rawk" height="270px"></img>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Menu onChange={this.handleChange} search_tag={this.state.tag} />
        <div className="App-header">
        {
          this.state.items.length > 0 ?
            (<div className="FlickerItems">{ this.renderItems() }</div>) :
            this.renderBlank()
        }
        </div>
        <footer>This code is available on <a href="https://github.com/baash05/rangeme">https://github.com/baash05/rangeme</a></footer>
      </div>
    )
  }
}

export default App
