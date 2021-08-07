import { Spinner } from 'react-bootstrap'

function loadData() {
  return (
    <>
      <Spinner animation="border" role="status">
        <span className="sr-only mt-5">Loading...</span>
      </Spinner>
    </>
  )
}

export default loadData