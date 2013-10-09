*********************************
Style guide for the Wyrm frontend
*********************************


.. contents::

..
..
..
..
..
..
..
..
..

****************
Generic Elements
****************

Spinner
=======

Spinner used for loading animations. I need to do a fallback gif for IE8. By default it centers itself. Add ``wh-spinner-margin`` for spacing.

.. raw:: html

    <div class="codeblock-example">
      <div class="wh-spinner  wh-spinner-large"></div>
      <div class="wh-spinner"></div>
      <div class="wh-spinner wh-spinner-small wh-spinner-margin"></div>
      <p><div class="wh-spinner wh-spinner-small wh-spinner-inline"></div> An inline spinner in some text.</p>
      <a href="" class="btn icon icon-check-sign"> In a button <div class="wh-spinner wh-spinner-small"></div></a>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-spinner wh-spinner-large"></div>
    <div class="wh-spinner"></div>
    <div class="wh-spinner wh-spinner-small wh-spinner-margin"></div>
    <p><div class="wh-spinner wh-spinner-small wh-spinner-inline"></div> An inline spinner in some text.</p>
    <a href="" class="btn icon icon-check-sign"> In a button <div class="wh-spinner"></div></a>

..
..
..
..
..
..
..
..
..

Buttons
=======

You can use the ``btn`` class on any element such as a ``href``, ``button`` or ``span``. Stack on the ``icon`` class along with a `font awesome <http://fortawesome.github.io/Font-Awesome/icons/>`_ icon for iconage. It can also be used within ``wh-dropdown`` for dropdown buttons.

.. note::
    If you plan on using buttons in a row, use the ``wh-btn-group`` class as show below. It forces buttons to have a ``vertical-align: text-top`` so that the the ``.btn:active`` border animation doesn't misalign the text.

.. raw:: html

    <div class="codeblock-example">
      <div class="wh-btn-group">
        <a href="" class="btn">.btn</a>
        <button class="btn btn-info">.btn-info</button>
        <span href="" class="btn btn-neutral">.btn-neutral</span>
      </div>
      <div class="wh-btn-group">
        <a href="" class="btn btn-warning">.btn-warning</a>
        <a href="" class="btn btn-danger">.btn-danger</a>
        <a href="" class="btn btn-link">.btn-link</a>
      </div>
      <div class="wh-btn-group">
        <a href="" class="btn"><div class="wh-spinner"></div> Spinner</a>
        <a href="" class="btn icon icon-check-sign"> With icon</a>
        <a href="" class="btn btn-disabled">.btn-disabled</a>
      </div>
      <div class="wh-dropdown wh-dropdown-bubble">
        <a href="" class="btn btn-neutral caret">As a dropdown </a>
        <dl class="wh-dropdown-menu">
          <dd><a href="">Choice one</a></dd>
          <dd><a href="">Choice two</a></dd>
          <dd><a href="">Choice three</a></dd>
        </dl>
      </div>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-btn-group">
      <a href="" class="btn">.btn</a>
      <button class="btn btn-info">.btn-info</button>
      <span href="" class="btn btn-neutral">.btn-neutral</span>
    </div>
    <div class="wh-btn-group">
      <a href="" class="btn btn-warning">.btn-warning</a>
      <a href="" class="btn btn-danger">.btn-danger</a>
      <a href="" class="btn btn-link">.btn-link</a>
    </div>
    <div class="wh-btn-group">
      <a href="" class="btn"><div class="wh-spinner"></div> Spinner</a>
      <a href="" class="btn icon icon-check-sign"> With icon</a>
      <a href="" class="btn btn-disabled">.btn-disabled</a>
    </div>
    <div class="wh-dropdown wh-dropdown-bubble">
      <a href="" class="btn btn-neutral caret">As a dropdown </a>
      <dl class="wh-dropdown-menu">
        <dd><a href="">Choice one</a></dd>
        <dd><a href="">Choice two</a></dd>
        <dd><a href="">Choice three</a></dd>
      </dl>
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

*************
Form elements
*************

Stacked form
============

Forms can be stacked using ``wh-form-stacked``.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
        <fieldset>
          <legend>Stacked form</legend>

          <div class="wh-control-group">
            <label for="title">Title</label>
            <div class="wh-control">
              <input type="text" id="title" placeholder="title" />
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

          <div class="wh-control-group">
            <label for="description">Description</label>
            <div class="wh-control">
              <textarea id="description" placeholder="something"></textarea>
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

          <div class="wh-control-group">
            <label for="option-radio-example1">Choose one</label>
            <div class="wh-control">
              <label for="option-radiox" class="wh-radio">
                <input id="option-radiox" name="option-radio-example1" type="radio" value="">
                Option 1
              </label>
              <label for="option-radioy" class="wh-radio">
                <input id="option-radioy" name="option-radio-example1" type="radio" value="">
                Option 2
              </label>
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

        </fieldset>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <form class="wh-form-stacked">
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

Forms can be aligned using ``wh-form-aligned``. At lower breakpoints, they fall back to stacked.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-aligned">
        <fieldset>
          <legend>Aligned form</legend>

          <div class="wh-control-group">
            <label for="title">Title</label>
            <div class="wh-control">
              <input type="text" id="title" placeholder="title" />
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

          <div class="wh-control-group">
            <label for="description">Description</label>
            <div class="wh-control">
              <textarea id="description" placeholder="something"></textarea>
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

          <div class="wh-control-group">
            <label for="option-radio-example1">Choose one</label>
            <div class="wh-control">
              <label for="option-radio1" class="wh-radio">
                <input id="option-radio1" name="option-radio-example1" type="radio" value="">
                Option 1
              </label>
              <label for="option-radio2" class="wh-radio">
                <input id="option-radio2" name="option-radio-example" type="radio" value="">
                Option 2
              </label>
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <form class="wh-form-aligned">
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

The form element itself always has four parts. The ``wh-control-group``, the ``wh-control`` and then the ``label`` and ``input`` within it. Optionally it can include a ``wh-form-message`` for any helper text.

Textareas by default are given a width of 100%, all other text inputs can go fluid with the ``fluid-input`` class attached to the ``wh-control-group``

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
        <div class="wh-control-group">
          <label for="some-textfield">Some textfield</label>
          <div class="wh-control">
            <!-- Can be replaced with any kind of text based input, textarea, or select. -->
            <input type="text" id="some-textfield" placeholder="Enter your textfield" />
            <!-- optional help message -->
            <span class="wh-form-message">Help goes here</span>
          </div>
        </div>
        <div class="wh-control-group fluid-input">
          <label for="some-fluid-textfield">Some fluid textfield</label>
          <div class="wh-control">
            <!-- Can be replaced with any kind of text based input, textarea, select or button -->
            <input type="text" id="some-fluid-textfield" placeholder="Enter your textfield" />
            <!-- optional help message -->
            <span class="wh-form-message">Help goes here</span>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-control-group">
      <label for="some-textfield">Some textfield</label>
      <div class="wh-control">
        <!-- Can be replaced with any kind of text based input, textarea, or select. -->
        <input type="text" id="some-textfield" placeholder="Enter your textfield" />
        <!-- optional help message -->
        <span class="wh-form-message">Help goes here</span>
      </div>
    </div>
    <div class="wh-control-group fluid-input">
      <label for="some-fluid-textfield">Some fluid textfield</label>
      <div class="wh-control">
        <!-- Can be replaced with any kind of text based input, textarea, select or button -->
        <input type="text" id="some-fluid-textfield" placeholder="Enter your textfield" />
        <!-- optional help message -->
        <span class="wh-form-message">Help goes here</span>
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
      <div class="wh-control-group">
        <label for="choose">Choose one</label>
        <div class="wh-control">
          <label for="option-one" class="wh-radio">
            <input id="option-one" name="option-radio-example" type="radio" value="">
            Option 1
          </label>
          <label for="option-two" class="wh-radio">
            <input id="option-two" name="option-radio-example" type="radio" value="">
            Option 2
          </label>
          <!-- optional help message -->
          <span class="wh-form-message">Help goes here</span>
        </div>
      </div>
      <div class="wh-control-group">
        <label for="choose-again">Choose another</label>
        <div class="wh-control">
          <label for="option-x" class="wh-checkbox">
            <input id="option-x" name="option-radio-example" type="checkbox" value="">
            Option 1
          </label>
          <label for="option-y" class="wh-checkbox">
            <input id="option-y" name="option-radio-example" type="checkbox" value="">
            Option 2
          </label>
          <!-- optional help message -->
          <span class="wh-form-message">Help goes here</span>
        </div>
      </div>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-control-group">
      <label for="choose">Choose one</label>
      <div class="wh-control">
        <label for="option-one" class="wh-radio">
          <input id="option-one" name="option-radio-example" type="radio" value="">
          Option 1
        </label>
        <label for="option-two" class="wh-radio">
          <input id="option-two" name="option-radio-example" type="radio" value="">
          Option 2
        </label>
        <!-- optional help message -->
        <span class="wh-form-message">Help goes here</span>
      </div>
    </div>
    <div class="wh-control-group">
      <label for="choose-again">Choose another</label>
      <div class="wh-control">
        <label for="option-x" class="wh-checkbox">
          <input id="option-x" name="option-radio-example" type="checkbox" value="">
          Option 1
        </label>
        <label for="option-y" class="wh-checkbox">
          <input id="option-y" name="option-radio-example" type="checkbox" value="">
          Option 2
        </label>
        <!-- optional help message -->
        <span class="wh-form-message">Help goes here</span>
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
      <form class="wh-form-stacked">
        <div class="wh-control-group">
          <label>Prefix</label>
          <div class="wh-control">
            <div class="wh-input-prefix">
              <span class="wh-input-context">http://www.sitename.com/</span><input type="text" id="right-label" placeholder="vanity-name-here">
            </div>
          </div>
        </div>
        <div class="wh-control-group">
          <label>Suffix</label>
          <div class="wh-control">
            <div class="wh-input-suffix">
              <input type="text" id="right-label" placeholder="username"><span class="wh-input-context">@gmail.com</span>
            </div>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-control-group">
      <label>Prefix</label>
      <div class="wh-control">
        <div class="wh-input-prefix">
          <span class="wh-input-context">http://www.sitename.com/</span><input type="text" id="right-label" placeholder="vanity-name-here">
        </div>
      </div>
    </div>
    <div class="wh-control-group">
      <label>Suffix</label>
      <div class="wh-control">
        <div class="wh-input-suffix">
          <input type="text" id="right-label" placeholder="username"><span class="wh-input-context">@gmail.com</span>
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

        <div class="wh-btn-group">
          <div class="wh-dropdown wh-dropdown-bubble">
            <span class="btn btn-info icon icon-question-sign caret"> Save... </span>
            <dl class="wh-dropdown-menu">
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

      <div class="wh-btn-group">
        <div class="wh-dropdown wh-dropdown-bubble">
          <span class="btn btn-info icon icon-question-sign caret"> Save... </span>
          <dl class="wh-dropdown-menu">
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

      <form class="wh-form-stacked">
        <hr />
        <fieldset>
          <legend>Schedule your article</legend>

          <p>Don't let anyone other than staff view this content until the scheduled date passes.</p>

          <div class="wh-control-group">
            <label for="right-label" >Publish date</label>
            <div class="wh-control">
              <div class="wh-input-prefix">
                <span class="wh-input-context"><i class="icon icon-calendar"></i></span><input type="datetime-local" value="2012-07-23T15:04">
              </div>
            </div>
          </div>

          <div class="wh-btn-group">
            <a href="" class="btn icon icon-ok-sign caret"> Publish on 07/23/2012 03:04PM</a>
            <a href="" class="btn btn-link">Save as a draft</a>
            <a href="" class="btn btn-link wh-text-danger">Delete</a>
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

      <div class="wh-control-group">
        <label for="right-label" >Publish date</label>
        <div class="wh-control">
          <div class="wh-input-prefix">
            <span class="wh-input-context"><i class="icon icon-calendar"></i></span><input type="datetime-local" value="2012-07-23T15:04">
          </div>
        </div>
      </div>

      <div class="wh-btn-group">
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

        <div class="wh-btn-group">
          <a href="" class="btn icon icon-ok-sign caret"> Save</a>
          <a href="" class="btn btn-link wh-text-danger">Delete article</a>
        </div>
      </fieldset>

    </div>

.. code-block:: html
    :linenos:

    <hr />

    <fieldset>
      <legend>Save your changes</legend>

      <p>This article went live on your site on 07/23/2012  at 03:04PM. <a href="">Change publish date?</a></p>

      <div class="wh-btn-group">
        <a href="" class="btn icon icon-ok-sign caret"> Save</a>
        <a href="" class="btn btn-link wh-text-danger">Delete article</a>
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

**************
Error Handling
**************

Field errors
============

To display an error, simply add the ``wh-control-group-error`` class to the to your ``wh-control group``. This will give everything red warning coloring.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
        <div class="wh-control-group wh-control-group-error">
          <label for="some-textfield">Some textfield</label>
          <div class="wh-control">
            <input type="text" id="some-textfield" placeholder="Enter your textfield" />
            <!-- The same wh-form-message field should be used for the error -->
            <span class="wh-form-message">You idiot, you should have done X.</span>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-control-group wh-control-group-error">
      <label for="some-textfield">Some textfield</label>
      <div class="wh-control">
        <input type="text" id="some-textfield" placeholder="Enter your textfield" />
        <!-- The same wh-form-message field should be used for the error -->
        <span class="wh-form-message">You idiot, you should have done X.</span>
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

Inline validation and saving
============================

Sometimes you don't need the user to hit actual save buttons and can just make saves or do form validation as they fill out the form.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
        <div class="wh-control-group">
          <label>Success</label>
          <div class="wh-control">
            <div class="wh-inline-validate wh-inline-validate-success">
              <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Success</span>
            </div>
          </div>
        </div>
        <div class="wh-control-group">
          <label>Info</label>
          <div class="wh-control">
            <div class="wh-inline-validate wh-inline-validate-info">
              <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Info</span>
            </div>
          </div>
        </div>
        <div class="wh-control-group">
          <label>Warning</label>
          <div class="wh-control">
            <div class="wh-inline-validate wh-inline-validate-warning">
              <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Warning</span>
            </div>
          </div>
        </div>
        <div class="wh-control-group">
          <label>Danger</label>
          <div class="wh-control">
            <div class="wh-inline-validate wh-inline-validate-danger">
              <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Danger</span>
            </div>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wh-control-group">
      <label>Success</label>
      <div class="wh-control">
        <div class="wh-inline-validate wh-inline-validate-success">
          <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Success</span>
        </div>
      </div>
    </div>
    <div class="wh-control-group">
      <label>Info</label>
      <div class="wh-control">
        <div class="wh-inline-validate wh-inline-validate-info">
          <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Info</span>
        </div>
      </div>
    </div>
    <div class="wh-control-group">
      <label>Warning</label>
      <div class="wh-control">
        <div class="wh-inline-validate wh-inline-validate-warning">
          <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Warning</span>
        </div>
      </div>
    </div>
    <div class="wh-control-group">
      <label>Danger</label>
      <div class="wh-control">
        <div class="wh-inline-validate wh-inline-validate-danger">
          <input type="text" id="right-label" placeholder="username"><span class="wh-input-context"> Danger</span>
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

Alert trays
===========

We often use alert trays after an action like a save takes place. Not that this is just an example of HTML markup. The JS needs to be rewritten.

.. raw:: html

    <div class="codeblock-example">
      <div class="wh-btn-group">
        <button class="btn" data-toggle="btn-tray-item-success">Click to toggle a success tray</button>
      </div>
    </div>

.. code-block:: html
    :linenos:

    <ul class="wh-tray-container">
      <li class="wh-tray-item-neutral"> Here is a neutral tray message</li>
      <li class="wh-tray-item-success"> Here is a success tray message</li>
      <li class="wh-tray-item-info"> Here is an info tray message</li>
      <li class="wh-tray-item-warning"> Here is a warning tray message</li>
      <li class="wh-tray-item-danger"> Here is a danger tray message</li>
    </ul>

..
..
..
..
..
..
..
..

In page alerts
==============

Sometimes field errors are not enough. In page alerts alerts can be displayed under the legend in the following format.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
        <fieldset>
          <legend>Alert, alert!</legend>
          <!-- Here is the global error message -->
          <div class="wh-alert wh-alert-neutral">
            <p>.wh-alert.wh-alert-neutral for little notes you need sometimes.</p>
            <ul class="wh-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>

          <div class="wh-alert wh-alert-danger">
            <p>.wh-alert.wh-alert-danger for bad things that already happened.</p>
            <ul class="wh-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>

          <div class="wh-alert wh-alert-warning">
            <p>.wh-alert.wh-alert-warning for bad things that might happen if you continue.</p>
            <ul class="wh-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>

          <div class="wh-alert wh-alert-info">
            <p>.wh-alert.wh-alert-info for friendly advice.</p>
            <ul class="wh-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>
          <!-- Form contents go here-->
        </fieldset>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <form class="wh-form-stacked">
      <fieldset>
        <legend>Alert, alert!</legend>
        <!-- Here is the global error message -->
        <div class="wh-alert wh-alert-neutral">
          <p>.wh-alert.wh-alert-neutral for little notes you need sometimes.</p>
          <ul class="wh-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>

        <div class="wh-alert wh-alert-danger">
          <p>.wh-alert.wh-alert-danger for bad things that already happened.</p>
          <ul class="wh-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>

        <div class="wh-alert wh-alert-warning">
          <p>.wh-alert.wh-alert-warning for bad things that might happen if you continue.</p>
          <ul class="wh-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>

        <div class="wh-alert wh-alert-info">
          <p>.wh-alert.wh-alert-info for friendly advice.</p>
          <ul class="wh-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>
        <!-- Form contents go here-->
      </fieldset>
    </form>

..
..
..
..
..
..
..
..

*****************
Full form example
*****************

Forms come in two types. ``wh-form-stacked`` and ``wh-form-aligned``. A new ``fieldset`` with a ``legend`` inside of it should be used for additional add ons to the base form (how plugins should work).

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked"> <!-- Can substitute wh-form-aligned if you wish-->
        <fieldset>
          <legend>Stacked form</legend>

          <div class="wh-control-group">
            <label for="title">Title</label>
            <div class="wh-control">
              <input type="text" id="title" placeholder="title" />
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

          <div class="wh-control-group">
            <label for="description">Description</label>
            <div class="wh-control">
              <textarea id="description" placeholder="something"></textarea>
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

        </fieldset>

        <!-- Every new fieldset after the first needs an hr -->
        <hr/>

        <fieldset>
          <legend>Additional fieldset</legend>

          <div class="wh-control-group">
            <label for="choose">Choose one</label>
            <div class="wh-control">
              <label for="option-a" class="wh-radio">
                <input id="option-a" name="option-radio-example" type="radio" value="">
                Option 1
              </label>
              <label for="option-b" class="wh-radio">
                <input id="option-b" name="option-radio-example" type="radio" value="">
                Option 2
              </label>
              <!-- optional help message -->
              <span class="wh-form-message">Help goes here</span>
            </div>
          </div>

        </fieldset>

        <hr/>

        <fieldset>
          <legend>Save your article</legend>

          <div class="wh-btn-group">
            <div class="wh-dropdown wh-dropdown-bubble">
              <span class="btn btn-info icon icon-question-sign caret"> Save... </span>
              <dl class="wh-dropdown-menu">
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

    <form class="wh-form-stacked"> <!-- Can substitute wh-form-aligned if you wish-->
      <fieldset>
        <legend>Create an article</legend>

        <div class="wh-control-group">
          <label for="title">Title</label>
          <div class="wh-control">
            <input type="text" id="title" placeholder="title" />
            <!-- optional help message -->
            <span class="wh-form-message">Help goes here</span>
          </div>
        </div>

        <div class="wh-control-group">
          <label for="description">Description</label>
          <div class="wh-control">
            <textarea id="description" placeholder="something"></textarea>
            <!-- optional help message -->
            <span class="wh-form-message">Help goes here</span>
          </div>
        </div>

      </fieldset>

      <!-- Every new fieldset after the first needs an hr -->
      <hr/>

      <fieldset>
        <legend>Additional fieldset</legend>

        <div class="wh-control-group">
          <label for="choose">Choose one</label>
          <div class="wh-control">
            <label for="option-a" class="wh-radio">
              <input id="option-a" name="option-radio-example" type="radio" value="">
              Option 1
            </label>
            <label for="option-b" class="wh-radio">
              <input id="option-b" name="option-radio-example" type="radio" value="">
              Option 2
            </label>
            <!-- optional help message -->
            <span class="wh-form-message">Help goes here</span>
          </div>
        </div>

      </fieldset>

      <!-- Every new fieldset after the first needs an hr -->
      <hr/>

      <fieldset>
        <legend>Save your article</legend>

        <div class="wh-btn-group">
          <div class="wh-dropdown wh-dropdown-bubble">
            <span class="btn btn-info icon icon-question-sign caret"> Save... </span>
            <dl class="wh-dropdown-menu">
              <dd><a href="">Save it as a draft</a></dd>
              <dd><a href="">Publish now </a></dd>
              <dd><a href="">Publish at a specific time</a></dd>
            </dl>
          </div>
        </div>
      </fieldset>
    </form>

..
..
..
..
..
..
..
..

**************
Special inputs
**************

Image uploader
==============

This widget is for the uploading of a single image file. It exists in 3 separate states.


* Blank - before an image has been uploaded.
* Loading - during the upload.
* Replace - Image is already uploaded, but can now be replaced.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
        <div class="wh-control-group">
          <label>Blank state</label>

          <div class="wh-form-control">
            <a class="wh-form-upload">
              <div class="wh-form-upload-content">
              <div class="image-drag">
                <i class="icon icon-picture wh-form-upload-icon"></i>
                <p>Drag or select image</p>
              </div>
              <div class="image-desktop">
                <i class="icon icon-desktop wh-form-upload-icon"></i>
                <p>Select from desktop</p>
              </div>
              <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
              </div>
            </a>
          </div>
        </div>
        
        <div class="wh-control-group">
          <label>Drag state</label>

          <div class="wh-form-control">
            <a class="wh-form-upload wh-form-upload-drop">
              <div class="wh-form-upload-content">
              <div class="image-drop">
                <i class="icon icon-arrow-down wh-form-upload-icon"></i>
                <p>Drop files here</p>
              </div>
              <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" disabled="true" placeholder=" Or paste URL" /></div>
              </div>
            </a>
          </div>
        </div>

        <div class="wh-control-group">
          <label>Loading state</label>

          <div class="wh-form-control">
            <a class="wh-form-upload">
              <div class="wh-form-upload-image">
                <img src="/static/img/trash/hm03.jpg" />
              </div>
              <div class="wh-form-upload-content">
                <div class="wh-spinner wh-spinner-margin"></div>
                <p>Uploading <span>92%</span></p>
              </div>
            </a>
          </div>
        </div>
        <div class="wh-control-group">
          <label>Replace state</label>

          <div class="wh-form-control">
            <a class="wh-form-upload">
              <div class="wh-form-upload-image">
                <img src="/static/img/trash/hm03.jpg" />
              </div>
              <div class="wh-form-upload-content">
              <div class="image-drag">
                <i class="icon icon-picture wh-form-upload-icon"></i>
                <p>Drag or select image</p>
              </div>
              <div class="image-desktop">
                <i class="icon icon-desktop wh-form-upload-icon"></i>
                <p>Select from desktop</p>
              </div>
              <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <!--Note, this is just an example of the HTML. This needs JS to work.-->
    <div class="wh-control-group">
      <label>Blank state</label>
      <div class="wh-form-control">
        <a class="wh-form-upload">
          <div class="wh-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wh-form-upload-icon"></i>
            <p>Drag or select image</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wh-form-upload-icon"></i>
            <p>Select from desktop</p>
          </div>
          <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
          </div>
        </a>
      </div>
    </div>

    <div class="wh-control-group">
      <label>Drag state</label>

      <div class="wh-form-control">
        <a class="wh-form-upload wh-form-upload-drop">
          <div class="wh-form-upload-content">
          <div class="image-drop">
            <i class="icon icon-arrow-down wh-form-upload-icon"></i>
            <p>Drop files here</p>
          </div>
          <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" disabled="true" placeholder=" Or paste URL" /></div>
          </div>
        </a>
      </div>
    </div>

    <div class="wh-control-group">
      <label>Loading state</label>
      <div class="wh-form-control">
        <a class="wh-form-upload">
          <div class="wh-form-upload-image">
            <img src="/static/img/trash/hm03.jpg" />
          </div>
          <div class="wh-form-upload-content">
            <div class="wh-spinner wh-spinner-margin"></div>
            <p>Uploading <span>92%</span></p>
          </div>
        </a>
      </div>
    </div>

    <div class="wh-control-group">
      <label>Replace state</label>
      <div class="wh-form-control">
        <a class="wh-form-upload">
          <div class="wh-form-upload-image">
            <img src="/static/img/trash/hm03.jpg" />
          </div>
          <div class="wh-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wh-form-upload-icon"></i>
            <p>Drag or select image</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wh-form-upload-icon"></i>
            <p>Select from desktop</p>
          </div>
          <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
          </div>
        </a>
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

File uploader
=============

This widget is for the uploading of a single file. It exists in 3 separate states.

* Blank - before a file has been uploaded.
* Loading - during the upload.
* Replace - File is already uploaded, but can now be replaced.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
      <div class="wh-control-group">
        <label for="some-textfield">Podcast mp3 file</label>
        <div class="wh-control">
          <button class="btn btn-neutral icon icon-file"> Drag or select file to upload</button>
        </div>
      </div>
      <div class="wh-control-group">
        <label for="some-textfield">Podcast mp3 file</label>
        <div class="wh-control">
          <button class="btn btn-neutral"><div class="wh-spinner"></div> Uploading 92%</button> <button class="btn btn-link wh-text-neutral">filename.mp3</button>
        </div>
      </div>
      <div class="wh-control-group">
        <label for="some-textfield">Podcast mp3 file</label>
        <div class="wh-control">
          <button class="btn btn-neutral icon icon-file"> Drag or select file to replace</button> <button class="btn btn-link wh-text-neutral">filename.mp3 (5.2 MB)</button>
        </div>
      </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <!--Note, this is just an example of the HTML. This needs JS to work.-->
    <div class="wh-control-group">
      <label for="some-textfield">Podcast mp3 file</label>
      <div class="wh-control">
        <button class="btn btn-neutral icon icon-file"> Drag or select file to upload</button>
      </div>
    </div>
    <div class="wh-control-group">
      <label for="some-textfield">Podcast mp3 file</label>
      <div class="wh-control">
        <button class="btn btn-neutral"><div class="wh-spinner"></div> Uploading 92%</button> <button class="btn btn-link wh-text-neutral">filename.mp3</button>
      </div>
    </div>
    <div class="wh-control-group">
      <label for="some-textfield">Podcast mp3 file</label>
      <div class="wh-control">
        <button class="btn btn-neutral icon icon-file"> Drag or select file to replace</button> <button class="btn btn-link wh-text-neutral">filename.mp3 (5.2 MB)</button>
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

Autocompleters
==============

Autocomplete allows only one item or multiple items, this should be set as part of the widget. Note that this is just an HTML example.

.. raw:: html

    <div class="codeblock-example">
      <form class="wh-form-stacked">
      <div class="wh-control-group">
        <label for="right-label" >Empty state</label>
        <div class="wh-control">
          <div class="wh-tag-input-group">
            <div class="wh-autocomplete-group">
              <label class="icon icon-search" for="search-example-1"></label> <input type="text" id="search-example-1" placeholder="Search users">
            </div>
          </div>
          <span class="wh-form-message">Example help text</span>
        </div>
      </div>

      <div class="wh-control-group">
        <label for="right-label" >One item allowed</label>
        <div class="wh-control">
          <div class="wh-tag-input-group">
            <span class="wh-tag">Dave Snider<a href="" class="wh-tag-remove"></a></span>
          </div>
          <span class="wh-form-message">User needs to close the above item before choosing a replacement.</span>
        </div>
      </div>

      <div class="wh-control-group">
        <label for="right-label" >Multiple items allowed</label>
        <div class="wh-control">
          <div class="wh-tag-input-group">
            <span class="wh-tag">Dave Snider<a href="" class="wh-tag-remove"></a></span>
            <span class="wh-tag">Andy McCurdy<a href="" class="wh-tag-remove"></a></span>
            <span class="wh-tag">Mike Horn<a href="" class="wh-tag-remove"></a></span>
            <div class="wh-autocomplete-group">
              <label class="icon icon-search" for="search-example-2"></label> <input type="text" id="search-example-2" placeholder="Search users">
              <div class="wh-autocomplete-dropdown">
                <ul>
                  <li class="on">
                    <img src="/static/img/trash/user1.jpg" />
                    Dave snider
                  </li>
                  <li>
                    <img src="/static/img/trash/user2.jpg" />
                    Andy McCurdy
                  </li>
                  <li>
                    <img src="/static/img/trash/user3.jpg" />
                    Mike Horn
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span class="wh-form-message">Autocomplete for authors. Adds yourself by default on new form.</span>
        </div>
      </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <!--Initial, default, empty state-->
    <div class="wh-control-group">
      <label for="right-label" >Empty state</label>
      <div class="wh-control">
        <div class="wh-tag-input-group">
          <div class="wh-autocomplete-group">
            <label class="icon icon-search" for="search-example-1"></label> <input type="text" id="search-example-1" placeholder="Search users">
          </div>
        </div>
        <span class="wh-form-message">Example help text</span>
      </div>
    </div>

    <!--When only one item is allowed-->
    <div class="wh-control-group">
      <label for="right-label" >One item allowed</label>
      <div class="wh-control">
        <div class="wh-tag-input-group">
          <span class="wh-tag">Dave Snider<a href="" class="wh-tag-remove"></a></span>
        </div>
        <span class="wh-form-message">User needs to close the above item before choosing a replacement.</span>
      </div>
    </div>

    <!--When multiple items are allowed-->
    <div class="wh-control-group">
      <label for="right-label" >Multiple items allowed</label>
      <div class="wh-control">
        <div class="wh-tag-input-group">
          <span class="wh-tag">Dave Snider<a href="" class="wh-tag-remove"></a></span>
          <span class="wh-tag">Andy McCurdy<a href="" class="wh-tag-remove"></a></span>
          <span class="wh-tag">Mike Horn<a href="" class="wh-tag-remove"></a></span>
          <div class="wh-autocomplete-group">
            <label class="icon icon-search" for="search-example-2"></label> <input type="text" id="search-example-2" placeholder="Search users">
            <div class="wh-autocomplete-dropdown">
              <ul>
                <li class="on">
                  <img src="/static/img/trash/user1.jpg" />
                  Dave snider
                </li>
                <li>
                  <img src="/static/img/trash/user2.jpg" />
                  Andy McCurdy
                </li>
                <li>
                  <img src="/static/img/trash/user3.jpg" />
                  Mike Horn
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span class="wh-form-message">Autocomplete for authors. Adds yourself by default on new form.</span>
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

Gallery management
==================

Note, the JS in this needs to be reworked completely. If you look at ``li.wh-form-gallery-edit``, that's the form that should open on
click of a gallery image. Images should be draggable for sorting.

.. raw:: html
   
    <div class="codeblock-example">
    <form class="wh-form-stacked">
    <legend>Gallery images</legend>

    <div class="wh-control-group">
      <label>Add images</label>
      <div class="wh-control">
        <div class="wh-form-upload  wh-form-upload-big">
          <div class="wh-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wh-form-upload-icon"></i>
            <p>Drag images from your computer to here. Select as many as you want.</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wh-form-upload-icon"></i>
            <p>Select images from your computer. Select as many as you want.</p>
          </div>
          <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URLs" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wh-form-control">
      <label>Click to edit, drag to sort</label>
      <div class="wh-control">
        <ul class="wh-form-gallery-manage">
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li class="wh-form-gallery-edit">
            <div class="arrow"><a name="edit-image"></a></div>
            <legend>Edit image</legend>

            <div class="wh-control-group">
              <label>Blank state</label>

              <div class="wh-form-control">
                <a class="wh-form-upload">
                  <div class="wh-form-upload-content">
                  <div class="image-drag">
                    <i class="icon icon-picture wh-form-upload-icon"></i>
                    <p>Drag or select image</p>
                  </div>
                  <div class="image-desktop">
                    <i class="icon icon-desktop wh-form-upload-icon"></i>
                    <p>Select from desktop</p>
                  </div>
                  <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
                  </div>
                </a>
              </div>
            </div>

            <div class="wh-control-group">
              <label for="right-label" >
                Title
              </label>
              <div class="wh-control">
                <input type="text" id="right-label" placeholder="Title">
              </div>
            </div>

            <div class="wh-control-group">
            <label for="right-label" >Short description</label>
            <div class="wh-control">
              <textarea></textarea>
            </div>
            </div>

            <div class="wh-btn-group">
            <button class="btn btn-info icon icon-ok-circle"> OK</button>
            </div>

          </li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
        </ul>
      </div>
      </form>
      </div>

.. code-block:: html
    :linenos:

    <legend>Gallery images</legend>

    <div class="wh-control-group">
      <label>Add images</label>
      <div class="wh-control">
        <div class="wh-form-upload  wh-form-upload-big">
          <div class="wh-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wh-form-upload-icon"></i>
            <p>Drag images from your computer to here. Select as many as you want.</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wh-form-upload-icon"></i>
            <p>Select images from your computer. Select as many as you want.</p>
          </div>
          <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URLs" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wh-form-control">
      <label>Click to edit, drag to sort</label>
      <div class="wh-control">
        <ul class="wh-form-gallery-manage">
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li class="wh-form-gallery-edit">
            <div class="arrow"><a name="edit-image"></a></div>
            <legend>Edit image</legend>

            <div class="wh-control-group">
              <label>Blank state</label>

              <div class="wh-form-control">
                <a class="wh-form-upload">
                  <div class="wh-form-upload-content">
                  <div class="image-drag">
                    <i class="icon icon-picture wh-form-upload-icon"></i>
                    <p>Drag or select image</p>
                  </div>
                  <div class="image-desktop">
                    <i class="icon icon-desktop wh-form-upload-icon"></i>
                    <p>Select from desktop</p>
                  </div>
                  <div class="wh-input-prefix"><span class="wh-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
                  </div>
                </a>
              </div>
            </div>

            <div class="wh-control-group">
              <label for="right-label" >
                Title
              </label>
              <div class="wh-control">
                <input type="text" id="right-label" placeholder="Title">
              </div>
            </div>

            <div class="wh-control-group">
            <label for="right-label" >Short description</label>
            <div class="wh-control">
              <textarea></textarea>
            </div>
            </div>

            <div class="wh-btn-group">
            <button class="btn btn-info icon icon-ok-circle"> OK</button>
            </div>

          </li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/static/img/trash/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
        </ul>
      </div>


