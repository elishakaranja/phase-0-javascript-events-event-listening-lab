
const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('input');
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})

function addingEventListener() {
    // Getting the input element by ID
    const input = document.getElementById('input');
  
    // Adding an event listener 
    input.addEventListener('click', function () {
      // Your event handler logic here
    });
  }
  
  // Call the outer function to set up the event listener
  addingEventListener();