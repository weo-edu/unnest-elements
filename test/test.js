var unnest = require('..')
var assert = require('assert')

var cleanup = []

describe('unnest-elements', function() {
  afterEach(function() {
    cleanup.forEach(function(fn) { fn() })
    cleanup = []
  })

  it('should work', function() {
    var container = create('Before<p>Middle</p>After')
    var unnested = unnest(container, container.childNodes[1])
    assert.equal(toHtml(unnested), '<div>Before</div><p>Middle</p><div>After</div>')
  })
})

function create(html) {
  var div = document.createElement('div')
  div.innerHTML = html
  document.body.appendChild(div)
  cleanup.push(function() { div.remove() })
  return div
}

function toHtml(nodes) {
  var div = document.createElement('div')
  nodes.forEach(function(node) { div.appendChild(node) })
  return div.innerHTML
}

