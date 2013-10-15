****************
Forms and inputs
****************

..
..
..
..
..
..
..
..
..

Stacked form
============

Forms can be stacked using ``wy-form-stacked``.

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-stacked">
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

          <div class="wy-control-group">
            <label for="option-radio-example1">Choose one</label>
            <div class="wy-control">
              <label for="option-radiox" class="wy-radio">
                <input id="option-radiox" name="option-radio-example1" type="radio" value="">
                Option 1
              </label>
              <label for="option-radioy" class="wy-radio">
                <input id="option-radioy" name="option-radio-example1" type="radio" value="">
                Option 2
              </label>
              <!-- optional help message -->
              <span class="wy-form-message">Help goes here</span>
            </div>
          </div>

        </fieldset>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <form class="wy-form-stacked">
      <!-- form contents here -->
    </form>

..
..
..
..
..
..
..
..
..

Aligned form
============

Forms can be aligned using ``wy-form-aligned``. At lower breakpoints, they fall back to stacked.

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-aligned">
        <fieldset>
          <legend>Aligned form</legend>

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

          <div class="wy-control-group">
            <label for="option-radio-example1">Choose one</label>
            <div class="wy-control">
              <label for="option-radio1" class="wy-radio">
                <input id="option-radio1" name="option-radio-example1" type="radio" value="">
                Option 1
              </label>
              <label for="option-radio2" class="wy-radio">
                <input id="option-radio2" name="option-radio-example" type="radio" value="">
                Option 2
              </label>
              <!-- optional help message -->
              <span class="wy-form-message">Help goes here</span>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <form class="wy-form-aligned">
      <!-- form contents here -->
    </form>
..
..
..
..
..
..
..
..
..

Inputs, selects, and textareas
==============================

The form element itself always has four parts. The ``wy-control-group``, the ``wy-control`` and then the ``label`` and ``input`` within it. Optionally it can include a ``wy-form-message`` for any helper text.

Textareas by default are given a width of 100%, all other text inputs can go fluid with the ``fluid-input`` class attached to the ``wy-control-group``

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-stacked">
        <div class="wy-control-group">
          <label for="some-textfield">Some textfield</label>
          <div class="wy-control">
            <!-- Can be replaced with any kind of text based input, textarea, or select. -->
            <input type="text" id="some-textfield" placeholder="Enter your textfield" />
            <!-- optional help message -->
            <span class="wy-form-message">Help goes here</span>
          </div>
        </div>
        <div class="wy-control-group fluid-input">
          <label for="some-fluid-textfield">Some fluid textfield</label>
          <div class="wy-control">
            <!-- Can be replaced with any kind of text based input, textarea, select or button -->
            <input type="text" id="some-fluid-textfield" placeholder="Enter your textfield" />
            <!-- optional help message -->
            <span class="wy-form-message">Help goes here</span>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-control-group">
      <label for="some-textfield">Some textfield</label>
      <div class="wy-control">
        <!-- Can be replaced with any kind of text based input, textarea, or select. -->
        <input type="text" id="some-textfield" placeholder="Enter your textfield" />
        <!-- optional help message -->
        <span class="wy-form-message">Help goes here</span>
      </div>
    </div>
    <div class="wy-control-group fluid-input">
      <label for="some-fluid-textfield">Some fluid textfield</label>
      <div class="wy-control">
        <!-- Can be replaced with any kind of text based input, textarea, select or button -->
        <input type="text" id="some-fluid-textfield" placeholder="Enter your textfield" />
        <!-- optional help message -->
        <span class="wy-form-message">Help goes here</span>
      </div>
    </div>

..
..
..
..
..
..
..
..
..

Radios and checkboxes
=====================

Radios and checkboxes need individual labels for each option and come with some unique classnames. Here's an example using a radio.

.. raw:: html

    <div class="codeblock-example">
      <div class="wy-control-group">
        <label for="choose">Choose one</label>
        <div class="wy-control">
          <label for="option-one" class="wy-radio">
            <input id="option-one" name="option-radio-example" type="radio" value="">
            Option 1
          </label>
          <label for="option-two" class="wy-radio">
            <input id="option-two" name="option-radio-example" type="radio" value="">
            Option 2
          </label>
          <!-- optional help message -->
          <span class="wy-form-message">Help goes here</span>
        </div>
      </div>
      <div class="wy-control-group">
        <label for="choose-again">Choose another</label>
        <div class="wy-control">
          <label for="option-x" class="wy-checkbox">
            <input id="option-x" name="option-radio-example" type="checkbox" value="">
            Option 1
          </label>
          <label for="option-y" class="wy-checkbox">
            <input id="option-y" name="option-radio-example" type="checkbox" value="">
            Option 2
          </label>
          <!-- optional help message -->
          <span class="wy-form-message">Help goes here</span>
        </div>
      </div>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-control-group">
      <label for="choose">Choose one</label>
      <div class="wy-control">
        <label for="option-one" class="wy-radio">
          <input id="option-one" name="option-radio-example" type="radio" value="">
          Option 1
        </label>
        <label for="option-two" class="wy-radio">
          <input id="option-two" name="option-radio-example" type="radio" value="">
          Option 2
        </label>
        <!-- optional help message -->
        <span class="wy-form-message">Help goes here</span>
      </div>
    </div>
    <div class="wy-control-group">
      <label for="choose-again">Choose another</label>
      <div class="wy-control">
        <label for="option-x" class="wy-checkbox">
          <input id="option-x" name="option-radio-example" type="checkbox" value="">
          Option 1
        </label>
        <label for="option-y" class="wy-checkbox">
          <input id="option-y" name="option-radio-example" type="checkbox" value="">
          Option 2
        </label>
        <!-- optional help message -->
        <span class="wy-form-message">Help goes here</span>
      </div>
    </div>


..
..
..
..
..
..
..
..
..

Extra input context
===================

You can give text inputs extra context if needed.

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-stacked">
        <div class="wy-control-group">
          <label>Prefix</label>
          <div class="wy-control">
            <div class="wy-input-prefix">
              <span class="wy-input-context">http://www.sitename.com/</span><input type="text" id="right-label" placeholder="vanity-name-here">
            </div>
          </div>
        </div>
        <div class="wy-control-group">
          <label>Suffix</label>
          <div class="wy-control">
            <div class="wy-input-suffix">
              <input type="text" id="right-label" placeholder="username"><span class="wy-input-context">@gmail.com</span>
            </div>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-control-group">
      <label>Prefix</label>
      <div class="wy-control">
        <div class="wy-input-prefix">
          <span class="wy-input-context">http://www.sitename.com/</span><input type="text" id="right-label" placeholder="vanity-name-here">
        </div>
      </div>
    </div>
    <div class="wy-control-group">
      <label>Suffix</label>
      <div class="wy-control">
        <div class="wy-input-suffix">
          <input type="text" id="right-label" placeholder="username"><span class="wy-input-context">@gmail.com</span>
        </div>
      </div>
    </div>


..
..
..
..
..
..
..
..
..

Save buttons for publishing in the future
=========================================

Content in the CMS can only be in one of these three states at any time.

* Draft - A saved document.
* Scheduled - A published document with a future publish date.
* Live - A published document live to the public.

By default, the bottom of any content form should look like this.

.. raw:: html

    <div class="codeblock-example">

      <hr />

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

    </div>

.. code-block:: html

    <!-- Form fields up here -->

    <hr />

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


If they select publish at a specific time, this part of the form should switch to the following.

.. raw:: html

    <div class="codeblock-example">

      <form class="wy-form-stacked">
        <hr />
        <fieldset>
          <legend>Schedule your article</legend>

          <p>Don't let anyone other than staff view this content until the scheduled date passes.</p>

          <div class="wy-control-group">
            <label for="right-label" >Publish date</label>
            <div class="wy-control">
              <div class="wy-input-prefix">
                <span class="wy-input-context"><i class="icon icon-calendar"></i></span><input type="datetime-local" value="2012-07-23T15:04">
              </div>
            </div>
          </div>

          <div class="wy-btn-group">
            <a href="" class="btn icon icon-ok-sign caret"> Publish on 07/23/2012 03:04PM</a>
            <a href="" class="btn btn-link">Save as a draft</a>
            <a href="" class="btn btn-link wy-text-danger">Delete</a>
          </div>
        </fieldset>
      </form>

    </div>

.. code-block:: html
    :linenos:

    <hr />

    <fieldset>
      <legend>Schedule your article</legend>

      <p>Don't let anyone other than staff view this content until the scheduled date passes.</p>

      <div class="wy-control-group">
        <label for="right-label" >Publish date</label>
        <div class="wy-control">
          <div class="wy-input-prefix">
            <span class="wy-input-context"><i class="icon icon-calendar"></i></span><input type="datetime-local" value="2012-07-23T15:04">
          </div>
        </div>
      </div>

      <div class="wy-btn-group">
        <a href="" class="btn icon icon-ok-sign caret"> Publish on 07/23/2012 03:04PM</a>
        <a href="" class="btn btn-link">Save as a draft</a>
      </div>
    </fieldset>



Once the content is live show the following. Clicking the change publish date link simple reverts to the above.

.. raw:: html

    <div class="codeblock-example">

      <hr />
      <fieldset>
        <legend>Save your changes</legend>

        <p>This article went live on your site on 07/23/2012  at 03:04PM. <a href="">Change publish date?</a></p>

        <div class="wy-btn-group">
          <a href="" class="btn icon icon-ok-sign caret"> Save</a>
          <a href="" class="btn btn-link wy-text-danger">Delete article</a>
        </div>
      </fieldset>

    </div>

.. code-block:: html
    :linenos:

    <hr />

    <fieldset>
      <legend>Save your changes</legend>

      <p>This article went live on your site on 07/23/2012  at 03:04PM. <a href="">Change publish date?</a></p>

      <div class="wy-btn-group">
        <a href="" class="btn icon icon-ok-sign caret"> Save</a>
        <a href="" class="btn btn-link wy-text-danger">Delete article</a>
      </div>
    </fieldset>


..
..
..
..
..
..
..
..

