import $ from 'jquery';
import ReactDOM from 'react-dom'
import React from 'react'
import StickyListView from './sticky-list-view.jsx'

ReactDOM.render(
    <StickyListView promise={$.ajax({
        url:'items.json',
        dataType:"json"
    })}/>,
    document.getElementById("test")
);