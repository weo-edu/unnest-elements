/**
 * Unnest node from wrapper.  E.g.
 *
 * <div id='wrapper'>
 *   Before
 *   <p id='paragraph'>This is a paragraph</p>
 *   After
 * </div>
 *
 * unnest(wrapper, paragraph) =>
 *
 * <div>
 *   Before
 * </div>
 * <p>This is a paragraph</p>
 * <div>
 *   After
 * </div>
 *
 * @param  {[type]} wrapper [description]
 * @param  {[type]} node    [description]
 * @return {[type]}         [description]
 */
module.exports = function(wrapper, node) {
  var mid = document.createRange()
  mid.selectNode(node)

  var left = document.createRange()
  left.selectNode(wrapper)
  left.setEnd(mid.startContainer, mid.startOffset)

  var right = document.createRange()
  right.selectNode(wrapper)
  right.setStart(mid.endContainer, mid.endOffset)

  return ([left, mid, right]).map(function(r) {
    return r.cloneContents()
  })
}