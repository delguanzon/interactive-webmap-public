#  Eco-regions Of The Pacific Northwest Webmap

#### By Yodel Guanzon <yodelguanzon@gmail.com>

#### Interactive webmap using MapBoxGL

## Technologies Used

* Git
* HTML
* Javascript
* NodeJS
* ESLint
* Babel
* ESBuild
* React-Map-GL
* Mapbox
* Vite
* Vercel

## Description

This is just a quick project to test out and build an interactive web map using React and Mapbox. Dataset comes from  WA DNR
<https://www.dnr.wa.gov/NHPdata>

## Setup/Installation Requirements

* Clone this repository on your desktop

### Requirements
* Create an account and generate a free API Token from Mapbox <https://account.mapbox.com/>
* Create '.env.local' file under your base directory and enter the following:

`VITE_REACT_APP_MAPBOX_TOKEN="<Paste_Token_Here>"`

### Setup
* Navigate to the project folder
* Run ``` $npm install ``` to install dependencies
* For building and live preview, use ```npm run dev```
* If the project did not automatically open in a browser, Copy and Paste the Local url in a web browser which can be found in your terminal:
<img src=".\readme\terminal.png">

* By default, it is set to ```http://localhost:5173```

### Live Preview

Alternatively, you can view the app through the follwing link:

* < /https://interactive-webmap.vercel.app/ >

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 02/13/2022 Yodel Guanzon
