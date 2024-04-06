import React from 'react'

function Newsletter() {
  return (
    <div className='newsletter'>
      <div className='news-text'>
        <h2>Newsletter - Stay tune and get the latest update</h2>
        <p>Far far away, behind the word mountains</p>
      </div>

      <form>
        <input type='email' placeholder='Enter your Email' />
        <button>
        <i class="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  )
}

export default Newsletter
