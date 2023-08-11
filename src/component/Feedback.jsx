import React from "react";

const Feedback = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Feedback
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Feedback
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-body text-center">
                <i class="far fa-file-alt fa-4x mb-3 animated rotateIn icon1"></i>
                <h3>Your opinion matters</h3>
                <p>
                  Help us improve our product?{" "}
                  <strong>Give us your valuable feedback</strong>
                </p>
                <hr />
                <h6>Your Rating</h6>
              </div>

              <div class="form-check mb-4">
                <input name="feedback" type="radio" />
                <label class="ml-3">Very good</label>
              </div>
              <div class="form-check mb-4">
                <input name="feedback" type="radio" />
                <label class="ml-3">Good</label>
              </div>
              <div class="form-check mb-4">
                <input name="feedback" type="radio" />
                <label class="ml-3">Mediocre</label>
              </div>
              <div class="form-check mb-4">
                <input name="feedback" type="radio" />
                <label class="ml-3">Bad</label>
              </div>
              <div class="form-check mb-4">
                <input name="feedback" type="radio" />
                <label class="ml-3">Very Bad</label>
              </div>

              <div class="text-center py-3">
                <h4>What could we improve?</h4>
              </div>
              <textarea
                type="textarea"
                placeholder="Your Message"
                rows="3"
                className="w-100"
              ></textarea>
            </div>
            <div class="modal-footer">
              <a href="" class="btn btn-primary">
                Send
                <i class="fa fa-paper-plane"></i>
              </a>
              <a href="" class="btn btn-outline-primary" data-dismiss="modal">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
