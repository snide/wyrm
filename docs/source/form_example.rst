************
Form Example
************

..
..
..
..
..
..
..
..

Full form example
=================

Forms come in two types. ``wy-form-stacked`` and ``wy-form-aligned``. A new ``fieldset`` with a ``legend`` inside of it should be used for additional add ons to the base form (how plugins should work).

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-stacked"> <!-- Can substitute wy-form-aligned if you wish-->
        <fieldset>
          <legend>Stacked form</legend>

          <div class="wy-control-group">
            <label for="title">Title</label>
            <div class="wy-control">
              <input type="text" id="title" placeholder="title" />
              <!-- optional help message -->
              <span class="wy-form-message">Help goes here</span>
            </div>
          </div>

          <div class="wy-control-group">
            <label for="description">Description</label>
            <div class="wy-control">
              <textarea id="description" placeholder="something"></textarea>
              <!-- optional help message -->
              <span class="wy-form-message">Help goes here</span>
            </div>
          </div>

        </fieldset>

        <!-- Every new fieldset after the first needs an hr -->
        <hr/>

        <fieldset>
          <legend>Additional fieldset</legend>

          <div class="wy-control-group">
            <label for="choose">Choose one</label>
            <div class="wy-control">
              <label for="option-a" class="wy-radio">
                <input id="option-a" name="option-radio-example" type="radio" value="">
                Option 1
              </label>
              <label for="option-b" class="wy-radio">
                <input id="option-b" name="option-radio-example" type="radio" value="">
                Option 2
              </label>
              <!-- optional help message -->
              <span class="wy-form-message">Help goes here</span>
            </div>
          </div>

        </fieldset>

        <hr/>

        <fieldset>
          <legend>Save your article</legend>

          <div class="wy-btn-group">
            <div class="wy-dropdown wy-dropdown-bubble">
              <span class="btn btn-info icon icon-question-sign caret"> Save... </span>
              <dl class="wy-dropdown-menu">
                <dd><a href="">Save it as a draft</a></dd>
                <dd><a href="">Publish now </a></dd>
                <dd><a href="">Publish at a specific time</a></dd>
              </dl>
            </div>
          </div>
        </fieldset>

      </form>
    </div>

.. code-block:: html
    :linenos:

    <form class="wy-form-stacked"> <!-- Can substitute wy-form-aligned if you wish-->
      <fieldset>
        <legend>Create an article</legend>

        <div class="wy-control-group">
          <label for="title">Title</label>
          <div class="wy-control">
            <input type="text" id="title" placeholder="title" />
            <!-- optional help message -->
            <span class="wy-form-message">Help goes here</span>
          </div>
        </div>

        <div class="wy-control-group">
          <label for="description">Description</label>
          <div class="wy-control">
            <textarea id="description" placeholder="something"></textarea>
            <!-- optional help message -->
            <span class="wy-form-message">Help goes here</span>
          </div>
        </div>

      </fieldset>

      <!-- Every new fieldset after the first needs an hr -->
      <hr/>

      <fieldset>
        <legend>Additional fieldset</legend>

        <div class="wy-control-group">
          <label for="choose">Choose one</label>
          <div class="wy-control">
            <label for="option-a" class="wy-radio">
              <input id="option-a" name="option-radio-example" type="radio" value="">
              Option 1
            </label>
            <label for="option-b" class="wy-radio">
              <input id="option-b" name="option-radio-example" type="radio" value="">
              Option 2
            </label>
            <!-- optional help message -->
            <span class="wy-form-message">Help goes here</span>
          </div>
        </div>

      </fieldset>

      <!-- Every new fieldset after the first needs an hr -->
      <hr/>

      <fieldset>
        <legend>Save your article</legend>

        <div class="wy-btn-group">
          <div class="wy-dropdown wy-dropdown-bubble">
            <span class="btn btn-info icon icon-question-sign caret"> Save... </span>
            <dl class="wy-dropdown-menu">
              <dd><a href="">Save it as a draft</a></dd>
              <dd><a href="">Publish now </a></dd>
              <dd><a href="">Publish at a specific time</a></dd>
            </dl>
          </div>
        </div>
      </fieldset>
    </form>
