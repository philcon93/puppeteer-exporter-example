# puppeteer-exporter-example

This is a simple PDF/PNG exporter using express and puppeteer under the hood

## Usage

There is one POST route at index `/`

**Body**

- href <string>: the sites URL, if not provided it will use `http://localhost:3002`
- type <string>: either 'pdf' or 'png'
- size <object>: an object of width, height, unit
    - width <string|number>: width of template
    - height <string|number>: height of template
    - unit <string>: unit of format sizes (px, in, pt, mm)
