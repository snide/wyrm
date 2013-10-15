******
Alerts
******

..
..
..
..
..
..
..
..


Field errors
============

To display an error, simply add the ``wy-control-group-error`` class to the to your ``wy-control group``. This will give everything red warning coloring.

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-stacked">
        <div class="wy-control-group wy-control-group-error">
          <label for="some-textfield">Some textfield</label>
          <div class="wy-control">
            <input type="text" id="some-textfield" placeholder="Enter your textfield" />
            <!-- The same wy-form-message field should be used for the error -->
            <span class="wy-form-message">You idiot, you should have done X.</span>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-control-group wy-control-group-error">
      <label for="some-textfield">Some textfield</label>
      <div class="wy-control">
        <input type="text" id="some-textfield" placeholder="Enter your textfield" />
        <!-- The same wy-form-message field should be used for the error -->
        <span class="wy-form-message">You idiot, you should have done X.</span>
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
      <form class="wy-form-stacked">
        <div class="wy-control-group">
          <label>Success</label>
          <div class="wy-control">
            <div class="wy-inline-validate wy-inline-validate-success">
              <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Success</span>
            </div>
          </div>
        </div>
        <div class="wy-control-group">
          <label>Info</label>
          <div class="wy-control">
            <div class="wy-inline-validate wy-inline-validate-info">
              <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Info</span>
            </div>
          </div>
        </div>
        <div class="wy-control-group">
          <label>Warning</label>
          <div class="wy-control">
            <div class="wy-inline-validate wy-inline-validate-warning">
              <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Warning</span>
            </div>
          </div>
        </div>
        <div class="wy-control-group">
          <label>Danger</label>
          <div class="wy-control">
            <div class="wy-inline-validate wy-inline-validate-danger">
              <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Danger</span>
            </div>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-control-group">
      <label>Success</label>
      <div class="wy-control">
        <div class="wy-inline-validate wy-inline-validate-success">
          <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Success</span>
        </div>
      </div>
    </div>
    <div class="wy-control-group">
      <label>Info</label>
      <div class="wy-control">
        <div class="wy-inline-validate wy-inline-validate-info">
          <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Info</span>
        </div>
      </div>
    </div>
    <div class="wy-control-group">
      <label>Warning</label>
      <div class="wy-control">
        <div class="wy-inline-validate wy-inline-validate-warning">
          <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Warning</span>
        </div>
      </div>
    </div>
    <div class="wy-control-group">
      <label>Danger</label>
      <div class="wy-control">
        <div class="wy-inline-validate wy-inline-validate-danger">
          <input type="text" id="right-label" placeholder="username"><span class="wy-input-context"> Danger</span>
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
      <div class="wy-btn-group">
        <button class="btn" data-toggle="btn-tray-item-success">Click to toggle a success tray</button>
      </div>
    </div>

.. code-block:: html
    :linenos:

    <ul class="wy-tray-container">
      <li class="wy-tray-item-neutral"> Here is a neutral tray message</li>
      <li class="wy-tray-item-success"> Here is a success tray message</li>
      <li class="wy-tray-item-info"> Here is an info tray message</li>
      <li class="wy-tray-item-warning"> Here is a warning tray message</li>
      <li class="wy-tray-item-danger"> Here is a danger tray message</li>
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
      <form class="wy-form-stacked">
        <fieldset>
          <legend>Alert, alert!</legend>
          <!-- Here is the global error message -->
          <div class="wy-alert wy-alert-neutral">
            <p>.wy-alert.wy-alert-neutral for little notes you need sometimes.</p>
            <ul class="wy-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>

          <div class="wy-alert wy-alert-danger">
            <p>.wy-alert.wy-alert-danger for bad things that already happened.</p>
            <ul class="wy-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>

          <div class="wy-alert wy-alert-warning">
            <p>.wy-alert.wy-alert-warning for bad things that might happen if you continue.</p>
            <ul class="wy-plain-list-disc">
              <li>Sometimes you need a list here.</li>
              <li>Over here is the second.</li>
              <li>This be the third.</li>
            </ul>
          </div>

          <div class="wy-alert wy-alert-info">
            <p>.wy-alert.wy-alert-info for friendly advice.</p>
            <ul class="wy-plain-list-disc">
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

    <form class="wy-form-stacked">
      <fieldset>
        <legend>Alert, alert!</legend>
        <!-- Here is the global error message -->
        <div class="wy-alert wy-alert-neutral">
          <p>.wy-alert.wy-alert-neutral for little notes you need sometimes.</p>
          <ul class="wy-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>

        <div class="wy-alert wy-alert-danger">
          <p>.wy-alert.wy-alert-danger for bad things that already happened.</p>
          <ul class="wy-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>

        <div class="wy-alert wy-alert-warning">
          <p>.wy-alert.wy-alert-warning for bad things that might happen if you continue.</p>
          <ul class="wy-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>

        <div class="wy-alert wy-alert-info">
          <p>.wy-alert.wy-alert-info for friendly advice.</p>
          <ul class="wy-plain-list-disc">
            <li>Sometimes you need a list here.</li>
            <li>Over here is the second.</li>
            <li>This be the third.</li>
          </ul>
        </div>
        <!-- Form contents go here-->
      </fieldset>
    </form>

