*************
Generic items
*************

..
..
..
..
..
..
..
..
..

Spinner
=======

Spinner used for loading animations. I need to do a fallback gif for IE8. By default it centers itself. Add ``wy-spinner-margin`` for spacing.

.. raw:: html

    <div class="codeblock-example">
      <div class="wy-spinner  wy-spinner-large"></div>
      <div class="wy-spinner"></div>
      <div class="wy-spinner wy-spinner-small wy-spinner-margin"></div>
      <p><div class="wy-spinner wy-spinner-small wy-spinner-inline"></div> An inline spinner in some text.</p>
      <a href="" class="btn icon icon-check-sign"> In a button <div class="wy-spinner wy-spinner-small"></div></a>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-spinner wy-spinner-large"></div>
    <div class="wy-spinner"></div>
    <div class="wy-spinner wy-spinner-small wy-spinner-margin"></div>
    <p><div class="wy-spinner wy-spinner-small wy-spinner-inline"></div> An inline spinner in some text.</p>
    <a href="" class="btn icon icon-check-sign"> In a button <div class="wy-spinner"></div></a>

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

You can use the ``btn`` class on any element such as a ``href``, ``button`` or ``span``. Stack on the ``icon`` class along with a `font awesome <http://fortawesome.github.io/Font-Awesome/icons/>`_ icon for iconage. It can also be used within ``wy-dropdown`` for dropdown buttons.

.. note::
    If you plan on using buttons in a row, use the ``wy-btn-group`` class as show below. It forces buttons to have a ``vertical-align: text-top`` so that the the ``.btn:active`` border animation doesn't misalign the text.

.. raw:: html

    <div class="codeblock-example">
      <div class="wy-btn-group">
        <a href="" class="btn">.btn</a>
        <button class="btn btn-info">.btn-info</button>
        <span href="" class="btn btn-neutral">.btn-neutral</span>
      </div>
      <div class="wy-btn-group">
        <a href="" class="btn btn-warning">.btn-warning</a>
        <a href="" class="btn btn-danger">.btn-danger</a>
        <a href="" class="btn btn-link">.btn-link</a>
      </div>
      <div class="wy-btn-group">
        <a href="" class="btn"><div class="wy-spinner"></div> Spinner</a>
        <a href="" class="btn icon icon-check-sign"> With icon</a>
        <a href="" class="btn btn-disabled">.btn-disabled</a>
      </div>
      <div class="wy-dropdown wy-dropdown-bubble">
        <a href="" class="btn btn-neutral caret">As a dropdown </a>
        <dl class="wy-dropdown-menu">
          <dd><a href="">Choice one</a></dd>
          <dd><a href="">Choice two</a></dd>
          <dd><a href="">Choice three</a></dd>
        </dl>
      </div>
    </div>

.. code-block:: html
    :linenos:

    <div class="wy-btn-group">
      <a href="" class="btn">.btn</a>
      <button class="btn btn-info">.btn-info</button>
      <span href="" class="btn btn-neutral">.btn-neutral</span>
    </div>
    <div class="wy-btn-group">
      <a href="" class="btn btn-warning">.btn-warning</a>
      <a href="" class="btn btn-danger">.btn-danger</a>
      <a href="" class="btn btn-link">.btn-link</a>
    </div>
    <div class="wy-btn-group">
      <a href="" class="btn"><div class="wy-spinner"></div> Spinner</a>
      <a href="" class="btn icon icon-check-sign"> With icon</a>
      <a href="" class="btn btn-disabled">.btn-disabled</a>
    </div>
    <div class="wy-dropdown wy-dropdown-bubble">
      <a href="" class="btn btn-neutral caret">As a dropdown </a>
      <dl class="wy-dropdown-menu">
        <dd><a href="">Choice one</a></dd>
        <dd><a href="">Choice two</a></dd>
        <dd><a href="">Choice three</a></dd>
      </dl>
    </div>

