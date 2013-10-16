*************
Extra widgets
*************

..
..
..
..
..
..
..
..

Image uploader
==============

This widget is for the uploading of a single image file. It exists in 3 separate states.


* Blank - before an image has been uploaded.
* Loading - during the upload.
* Replace - Image is already uploaded, but can now be replaced.

.. raw:: html

    <div class="codeblock-example">
      <form class="wy-form-stacked">
        <div class="wy-control-group">
          <label>Blank state</label>

          <div class="wy-form-control">
            <a class="wy-form-upload">
              <div class="wy-form-upload-content">
              <div class="image-drag">
                <i class="icon icon-picture wy-form-upload-icon"></i>
                <p>Drag or select image</p>
              </div>
              <div class="image-desktop">
                <i class="icon icon-desktop wy-form-upload-icon"></i>
                <p>Select from desktop</p>
              </div>
              <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
              </div>
            </a>
          </div>
        </div>

        <div class="wy-control-group">
          <label>Drag state</label>

          <div class="wy-form-control">
            <a class="wy-form-upload wy-form-upload-drop">
              <div class="wy-form-upload-content">
              <div class="image-drop">
                <i class="icon icon-arrow-down wy-form-upload-icon"></i>
                <p>Drop files here</p>
              </div>
              <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" disabled="true" placeholder=" Or paste URL" /></div>
              </div>
            </a>
          </div>
        </div>

        <div class="wy-control-group">
          <label>Loading state</label>

          <div class="wy-form-control">
            <a class="wy-form-upload">
              <div class="wy-form-upload-image">
                <img src="/_static/hm03.jpg" />
              </div>
              <div class="wy-form-upload-content">
                <div class="wy-spinner wy-spinner-margin"></div>
                <p>Uploading <span>92%</span></p>
              </div>
            </a>
          </div>
        </div>
        <div class="wy-control-group">
          <label>Replace state</label>

          <div class="wy-form-control">
            <a class="wy-form-upload">
              <div class="wy-form-upload-image">
                <img src="/_static/hm03.jpg" />
              </div>
              <div class="wy-form-upload-content">
              <div class="image-drag">
                <i class="icon icon-picture wy-form-upload-icon"></i>
                <p>Drag or select image</p>
              </div>
              <div class="image-desktop">
                <i class="icon icon-desktop wy-form-upload-icon"></i>
                <p>Select from desktop</p>
              </div>
              <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <!--Note, this is just an example of the HTML. This needs JS to work.-->
    <div class="wy-control-group">
      <label>Blank state</label>
      <div class="wy-form-control">
        <a class="wy-form-upload">
          <div class="wy-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wy-form-upload-icon"></i>
            <p>Drag or select image</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wy-form-upload-icon"></i>
            <p>Select from desktop</p>
          </div>
          <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
          </div>
        </a>
      </div>
    </div>

    <div class="wy-control-group">
      <label>Drag state</label>

      <div class="wy-form-control">
        <a class="wy-form-upload wy-form-upload-drop">
          <div class="wy-form-upload-content">
          <div class="image-drop">
            <i class="icon icon-arrow-down wy-form-upload-icon"></i>
            <p>Drop files here</p>
          </div>
          <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" disabled="true" placeholder=" Or paste URL" /></div>
          </div>
        </a>
      </div>
    </div>

    <div class="wy-control-group">
      <label>Loading state</label>
      <div class="wy-form-control">
        <a class="wy-form-upload">
          <div class="wy-form-upload-image">
            <img src="/_static/hm03.jpg" />
          </div>
          <div class="wy-form-upload-content">
            <div class="wy-spinner wy-spinner-margin"></div>
            <p>Uploading <span>92%</span></p>
          </div>
        </a>
      </div>
    </div>

    <div class="wy-control-group">
      <label>Replace state</label>
      <div class="wy-form-control">
        <a class="wy-form-upload">
          <div class="wy-form-upload-image">
            <img src="/_static/hm03.jpg" />
          </div>
          <div class="wy-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wy-form-upload-icon"></i>
            <p>Drag or select image</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wy-form-upload-icon"></i>
            <p>Select from desktop</p>
          </div>
          <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
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
      <form class="wy-form-stacked">
      <div class="wy-control-group">
        <label for="some-textfield">Podcast mp3 file</label>
        <div class="wy-control">
          <button class="btn btn-neutral icon icon-file"> Drag or select file to upload</button>
        </div>
      </div>
      <div class="wy-control-group">
        <label for="some-textfield">Podcast mp3 file</label>
        <div class="wy-control">
          <button class="btn btn-neutral"><div class="wy-spinner"></div> Uploading 92%</button> <button class="btn btn-link wy-text-neutral">filename.mp3</button>
        </div>
      </div>
      <div class="wy-control-group">
        <label for="some-textfield">Podcast mp3 file</label>
        <div class="wy-control">
          <button class="btn btn-neutral icon icon-file"> Drag or select file to replace</button> <button class="btn btn-link wy-text-neutral">filename.mp3 (5.2 MB)</button>
        </div>
      </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <!--Note, this is just an example of the HTML. This needs JS to work.-->
    <div class="wy-control-group">
      <label for="some-textfield">Podcast mp3 file</label>
      <div class="wy-control">
        <button class="btn btn-neutral icon icon-file"> Drag or select file to upload</button>
      </div>
    </div>
    <div class="wy-control-group">
      <label for="some-textfield">Podcast mp3 file</label>
      <div class="wy-control">
        <button class="btn btn-neutral"><div class="wy-spinner"></div> Uploading 92%</button> <button class="btn btn-link wy-text-neutral">filename.mp3</button>
      </div>
    </div>
    <div class="wy-control-group">
      <label for="some-textfield">Podcast mp3 file</label>
      <div class="wy-control">
        <button class="btn btn-neutral icon icon-file"> Drag or select file to replace</button> <button class="btn btn-link wy-text-neutral">filename.mp3 (5.2 MB)</button>
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
      <form class="wy-form-stacked">
      <div class="wy-control-group">
        <label for="right-label" >Empty state</label>
        <div class="wy-control">
          <div class="wy-tag-input-group">
            <div class="wy-autocomplete-group">
              <label class="icon icon-search" for="search-example-1"></label> <input type="text" id="search-example-1" placeholder="Search users">
            </div>
          </div>
          <span class="wy-form-message">Example help text</span>
        </div>
      </div>

      <div class="wy-control-group">
        <label for="right-label" >One item allowed</label>
        <div class="wy-control">
          <div class="wy-tag-input-group">
            <span class="wy-tag">Dave Snider<a href="" class="wy-tag-remove"></a></span>
          </div>
          <span class="wy-form-message">User needs to close the above item before choosing a replacement.</span>
        </div>
      </div>

      <div class="wy-control-group">
        <label for="right-label" >Multiple items allowed</label>
        <div class="wy-control">
          <div class="wy-tag-input-group">
            <span class="wy-tag">Dave Snider<a href="" class="wy-tag-remove"></a></span>
            <span class="wy-tag">Andy McCurdy<a href="" class="wy-tag-remove"></a></span>
            <span class="wy-tag">Mike Horn<a href="" class="wy-tag-remove"></a></span>
            <div class="wy-autocomplete-group">
              <label class="icon icon-search" for="search-example-2"></label> <input type="text" id="search-example-2" placeholder="Search users">
              <div class="wy-autocomplete-dropdown">
                <ul>
                  <li class="on">
                    <img src="/_static/user1.jpg" />
                    Dave snider
                  </li>
                  <li>
                    <img src="/_static/user2.jpg" />
                    Andy McCurdy
                  </li>
                  <li>
                    <img src="/_static/user3.jpg" />
                    Mike Horn
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span class="wy-form-message">Autocomplete for authors. Adds yourself by default on new form.</span>
        </div>
      </div>
      </form>
    </div>

.. code-block:: html
    :linenos:

    <!--Initial, default, empty state-->
    <div class="wy-control-group">
      <label for="right-label" >Empty state</label>
      <div class="wy-control">
        <div class="wy-tag-input-group">
          <div class="wy-autocomplete-group">
            <label class="icon icon-search" for="search-example-1"></label> <input type="text" id="search-example-1" placeholder="Search users">
          </div>
        </div>
        <span class="wy-form-message">Example help text</span>
      </div>
    </div>

    <!--When only one item is allowed-->
    <div class="wy-control-group">
      <label for="right-label" >One item allowed</label>
      <div class="wy-control">
        <div class="wy-tag-input-group">
          <span class="wy-tag">Dave Snider<a href="" class="wy-tag-remove"></a></span>
        </div>
        <span class="wy-form-message">User needs to close the above item before choosing a replacement.</span>
      </div>
    </div>

    <!--When multiple items are allowed-->
    <div class="wy-control-group">
      <label for="right-label" >Multiple items allowed</label>
      <div class="wy-control">
        <div class="wy-tag-input-group">
          <span class="wy-tag">Dave Snider<a href="" class="wy-tag-remove"></a></span>
          <span class="wy-tag">Andy McCurdy<a href="" class="wy-tag-remove"></a></span>
          <span class="wy-tag">Mike Horn<a href="" class="wy-tag-remove"></a></span>
          <div class="wy-autocomplete-group">
            <label class="icon icon-search" for="search-example-2"></label> <input type="text" id="search-example-2" placeholder="Search users">
            <div class="wy-autocomplete-dropdown">
              <ul>
                <li class="on">
                  <img src="/_static/user1.jpg" />
                  Dave snider
                </li>
                <li>
                  <img src="/_static/user2.jpg" />
                  Andy McCurdy
                </li>
                <li>
                  <img src="/_static/user3.jpg" />
                  Mike Horn
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span class="wy-form-message">Autocomplete for authors. Adds yourself by default on new form.</span>
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

Note, the JS in this needs to be reworked completely. If you look at ``li.wy-form-gallery-edit``, that's the form that should open on
click of a gallery image. Images should be draggable for sorting.

.. raw:: html

    <div class="codeblock-example">
    <form class="wy-form-stacked">
    <legend>Gallery images</legend>

    <div class="wy-control-group">
      <label>Add images</label>
      <div class="wy-control">
        <div class="wy-form-upload  wy-form-upload-big">
          <div class="wy-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wy-form-upload-icon"></i>
            <p>Drag images from your computer to here. Select as many as you want.</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wy-form-upload-icon"></i>
            <p>Select images from your computer. Select as many as you want.</p>
          </div>
          <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URLs" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wy-form-control">
      <label>Click to edit, drag to sort</label>
      <div class="wy-control">
        <ul class="wy-form-gallery-manage">
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li class="wy-form-gallery-edit">
            <div class="arrow"><a name="edit-image"></a></div>
            <legend>Edit image</legend>

            <div class="wy-control-group">
              <label>Blank state</label>

              <div class="wy-form-control">
                <a class="wy-form-upload">
                  <div class="wy-form-upload-content">
                  <div class="image-drag">
                    <i class="icon icon-picture wy-form-upload-icon"></i>
                    <p>Drag or select image</p>
                  </div>
                  <div class="image-desktop">
                    <i class="icon icon-desktop wy-form-upload-icon"></i>
                    <p>Select from desktop</p>
                  </div>
                  <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
                  </div>
                </a>
              </div>
            </div>

            <div class="wy-control-group">
              <label for="right-label" >
                Title
              </label>
              <div class="wy-control">
                <input type="text" id="right-label" placeholder="Title">
              </div>
            </div>

            <div class="wy-control-group">
            <label for="right-label" >Short description</label>
            <div class="wy-control">
              <textarea></textarea>
            </div>
            </div>

            <div class="wy-btn-group">
            <button class="btn btn-info icon icon-ok-circle"> OK</button>
            </div>

          </li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
        </ul>
      </div>
      </form>
      </div>

.. code-block:: html
    :linenos:

    <legend>Gallery images</legend>

    <div class="wy-control-group">
      <label>Add images</label>
      <div class="wy-control">
        <div class="wy-form-upload  wy-form-upload-big">
          <div class="wy-form-upload-content">
          <div class="image-drag">
            <i class="icon icon-picture wy-form-upload-icon"></i>
            <p>Drag images from your computer to here. Select as many as you want.</p>
          </div>
          <div class="image-desktop">
            <i class="icon icon-desktop wy-form-upload-icon"></i>
            <p>Select images from your computer. Select as many as you want.</p>
          </div>
          <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URLs" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wy-form-control">
      <label>Click to edit, drag to sort</label>
      <div class="wy-control">
        <ul class="wy-form-gallery-manage">
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li class="wy-form-gallery-edit">
            <div class="arrow"><a name="edit-image"></a></div>
            <legend>Edit image</legend>

            <div class="wy-control-group">
              <label>Blank state</label>

              <div class="wy-form-control">
                <a class="wy-form-upload">
                  <div class="wy-form-upload-content">
                  <div class="image-drag">
                    <i class="icon icon-picture wy-form-upload-icon"></i>
                    <p>Drag or select image</p>
                  </div>
                  <div class="image-desktop">
                    <i class="icon icon-desktop wy-form-upload-icon"></i>
                    <p>Select from desktop</p>
                  </div>
                  <div class="wy-input-prefix"><span class="wy-input-context"><i class="icon icon-globe"></i></span><input type="text" placeholder=" Or paste URL" /></div>
                  </div>
                </a>
              </div>
            </div>

            <div class="wy-control-group">
              <label for="right-label" >
                Title
              </label>
              <div class="wy-control">
                <input type="text" id="right-label" placeholder="Title">
              </div>
            </div>

            <div class="wy-control-group">
            <label for="right-label" >Short description</label>
            <div class="wy-control">
              <textarea></textarea>
            </div>
            </div>

            <div class="wy-btn-group">
            <button class="btn btn-info icon icon-ok-circle"> OK</button>
            </div>

          </li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm01.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm02.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm03.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
          <li><a href="#edit-image"><img src="/_static/hm04.jpg" data-toggle="tooltip" data-placement="top" title="Click to edit, drag to sort." /></a></li>
        </ul>
      </div>


