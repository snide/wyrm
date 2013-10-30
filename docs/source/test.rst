Message Digests
===============

.. class:: cryptography.primitives.hashes.BaseHash(data=None)

   Abstract base class that implements a common interface for all hash
   algorithms that follow here.

   If ``data`` is provided ``update(data)`` is called upon construction.

    .. method:: update(data)

        :param bytes data: The bytes you wish to hash.

    .. method:: copy()

        :return: a new instance of this object with a copied internal state.

    .. method:: digest()

        :return bytes: The message digest as bytes.

    .. method:: hexdigest()

        :return str: The message digest as hex.



+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  |
+============+============+===========+============+============+===========+============+============+===========+============+============+===========+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+

SHA-1
~~~~~

.. attention::

    NIST has deprecated SHA-1 in favor of the SHA-2 variants. New applications
    are strongly suggested to use SHA-2 over SHA-1.

.. class:: cryptography.primitives.hashes.SHA1()

    SHA-1 is a cryptographic hash function standardized by NIST. It has a
    160-bit message digest.

SHA-2 Family
~~~~~~~~~~~~

.. class:: cryptography.primitives.hashes.SHA224()

    SHA-224 is a cryptographic hash function from the SHA-2 family and
    standardized by NIST. It has a 224-bit message digest.

.. class:: cryptography.primitives.hashes.SHA256()

    SHA-256 is a cryptographic hash function from the SHA-2 family and
    standardized by NIST. It has a 256-bit message digest.

.. class:: cryptography.primitives.hashes.SHA384()

    SHA-384 is a cryptographic hash function from the SHA-2 family and
    standardized by NIST. It has a 384-bit message digest.

.. class:: cryptography.primitives.hashes.SHA512()

    SHA-512 is a cryptographic hash function from the SHA-2 family and
    standardized by NIST. It has a 512-bit message digest.

RIPEMD160
~~~~~~~~~

.. class:: cryptography.primitives.hashes.RIPEMD160()

    RIPEMD160 is a cryptographic hash function that is part of ISO/IEC
    10118-3:2004. It has a 160-bit message digest.

Whirlpool
~~~~~~~~~

.. class:: cryptography.primitives.hashes.Whirlpool()

    Whirlpool is a cryptographic hash function that is part of ISO/IEC
    10118-3:2004. It has a 512-bit message digest.

MD5
~~~

.. warning::

    MD5 is a deprecated hash algorithm that has practical known collision
    attacks. You are strongly discouraged from using it.

.. class:: cryptography.primitives.hashes.MD5()

    MD5 is a deprecated cryptographic hash function. It has a 128-bit message
    digest and has practical known collision attacks.

.. _upnp-clients:

************
UPnP clients
************

`UPnP <http://en.wikipedia.org/wiki/Universal_Plug_and_Play>`_ is a set of
specifications for media sharing, playing, remote control, etc, across a home
network. The specs are supported by a lot of consumer devices (like
smartphones, TVs, Xbox, and PlayStation) that are often labeled as being `DLNA
<http://en.wikipedia.org/wiki/DLNA>`_ compatible or certified.

The DLNA guidelines and UPnP specifications defines several device roles, of
which Mopidy may play two:

DLNA Digital Media Server (DMS) / UPnP AV MediaServer:

    A MediaServer provides a library of media and is capable of streaming that
    media to a MediaRenderer. If Mopidy was a MediaServer, you could browse and
    play Mopidy's music on a TV, smartphone, or tablet supporting UPnP. Mopidy
    does not currently support this, but we may in the future.  :issue:`52` is
    the relevant wishlist issue.

DLNA Digital Media Renderer (DMR) / UPnP AV MediaRenderer:

    A MediaRenderer is asked by some remote controller to play some
    given media, typically served by a MediaServer. If Mopidy was a
    MediaRenderer, you could use e.g. your smartphone or tablet to make Mopidy
    play media. Mopidy *does already* have experimental support for being a
    MediaRenderer with the help of Rygel, as you can read more about below.


.. _rygel:

How to make Mopidy available as an UPnP MediaRenderer
=====================================================

With the help of `the Rygel project <https://live.gnome.org/Rygel>`_ Mopidy can
be made available as an UPnP MediaRenderer. Rygel will interface with Mopidy's
:ref:`MPRIS frontend <ext-mpris>`, and make Mopidy available as a MediaRenderer
on the local network. Since this depends on the MPRIS frontend, which again
depends on D-Bus being available, this will only work on Linux, and not OS X.
MPRIS/D-Bus is only available to other applications on the same host, so Rygel
must be running on the same machine as Mopidy.

1. Start Mopidy and make sure the :ref:`MPRIS frontend <ext-mpris>` is working.
   It is activated by default, but you may miss dependencies or be using OS X,
   in which case it will not work. Check the console output when Mopidy is
   started for any errors related to the MPRIS frontend. If you're unsure it is
   working, there are instructions for how to test it on the :ref:`MPRIS
   frontend <ext-mpris>` page.

2. Install Rygel. On Debian/Ubuntu::

       sudo apt-get install rygel

3. Enable Rygel's MPRIS plugin. On Debian/Ubuntu, edit ``/etc/rygel.conf``,
   find the ``[MPRIS]`` section, and change ``enabled=false`` to
   ``enabled=true``.

4. Start Rygel by running::

       rygel

   Example output::

       $ rygel
       Rygel-Message: New plugin 'MediaExport' available
       Rygel-Message: New plugin 'org.mpris.MediaPlayer2.mopidy' available

   In the above example, you can see that Rygel found Mopidy, and it is now
   making Mopidy available through Rygel.


The UPnP-Inspector client
=========================

`UPnP-Inspector <http://coherence.beebits.net/wiki/UPnP-Inspector>`_ is a
graphical analyzer and debugging tool for UPnP services. It will detect any
UPnP devices on your network, and show these in a tree structure. This is not a
tool for your everyday music listening while relaxing on the couch, but it may
be of use for testing that your setup works correctly.

1. Install UPnP-Inspector. On Debian/Ubuntu::

       sudo apt-get install upnp-inspector

2. Run it::

       upnp-inspector

3. Assuming that Mopidy is running with a working MPRIS frontend, and that
   Rygel is running on the same machine, Mopidy should now appear in
   UPnP-Inspector's device list.

4. If you expand the tree item saying ``Mopidy
   (MediaRenderer:2)`` or similiar, and then the sub element named
   ``AVTransport:2`` or similar, you'll find a list of commands you can invoke.
   E.g. if you double-click the ``Pause`` command, you'll get a new window
   where you can press an ``Invoke`` button, and then Mopidy should be paused.

Note that if you have a firewall on the host running Mopidy and Rygel, and you
want this to be exposed to the rest of your local network, you need to open up
your firewall for UPnP traffic. UPnP use UDP port 1900 as well as some
dynamically assigned ports. I've only verified that this procedure works across
the network by temporarily disabling the firewall on the the two hosts
involved, so I'll leave any firewall configuration as an exercise to the
reader.


Other clients
=============

For a long list of UPnP clients for all possible platforms, see Wikipedia's
`List of UPnP AV media servers and clients
<http://en.wikipedia.org/wiki/List_of_UPnP_AV_media_servers_and_clients>`_.
