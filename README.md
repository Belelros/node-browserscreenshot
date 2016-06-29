# stackshots

stackshots uses the BrowserStack's Screenshot API to take screenshots from websites and downloads to your computer.
It's great for automated tests to get a glance of your site in different browsers.

Note that this program needs a "Regular" BrowserStack plan.  Please see [BrowserStack Account Subscriptions](https://www.browserstack.com/accounts/subscriptions) for more details.

## CLI Usage

These are the parameters of the CLI

```
Options:
  -u, --username     The username you use to log in to Browserstack                                                            [required]
  -k, --accesskey    Your api access key                                                                                       [required]
  -w, --website      The website(s) from which you want to get screenshots, as a comma-separated list
  -b, --browser      The browser(s) from which you want to get screenshots, as a comma-separated list                          [default: "IE_8,IE_9,Chrome,Firefox"]
  -o, --orientation  Orientation of the device (portrait|landscape)                                                             [default: "portrait"]
  -s, --os           Operating System of the browser separating version with underscore (windows_xp), as a comma-separated list [default: "windows_7"]
  -d, --device       The device(s) from which you want to get screenshots, as a comma-separated list
  -f, --folder       Folder in which screenshots will be stored                                                                 [default: Current folder]
  -l, --ls           Instead of getting images, it will output a list of browsers and OSes available
  -t, --tunnel       Enable tunnel support
  -h, --help         Shows help info
```

You may think that `website` should be mandatory. Since every single browser you request is a *paid* request and it will consume from the total, if you don't provide any website you only
will get the browsers to which you *would* submit the request. Try as many times as you want!

### `username`

This is your BrowserStack Username.  See [BrowserStack Account Settings](https://www.browserstack.com/accounts/settings).

### `accesskey`

Access Key for your BrowserStack account.

### `website`

Comma-separated list of the URLs from which you want to get screenshots.

For example:

```
www.google.com,www.browserstack.com
```

Or just one:

```
www.google.com
```

### `browser`

Browser from which you want to get an screenshot.  By default they are:

* Internet Explorer 8 & Internet Explorer 9
* Chrome Latest
* Firefox Latest

If you don't specify a version, it will suppose you want to use the latest one:

```
--browser ie
```

Will get you:

* IE 10 Desktop - Windows 8
* IE 10 normal - Windows 7

You can also get all of the versions from a browser, attaching `_all`:

```
--browser ie_all
```

Or a single version or a combination of them:

```
--browser ie_6,ie_7
```

* IE 6 - Windows XP
* IE 7 - Windows XP

#### Current available browsers

* `safari`
* `chrome`
* `firefox`
* `opera`
* `ie`
* `mobile safari`
* `android browser`

Just add `"` if you need to add spaces:

```
--browser "chrome,mobile safari_6.0"
```

### `orientation`

Orientation is useful only for mobile devices.  However, the program will not allow you to pass anything that's not `portrait` or `landscape`.  The default is `portrait`.

### `os`

This is the Operating System in which you can request screenshots.  The default is `Windows`.

```
--os "OS X"
```

The program is smart enough to know your intentions... sometimes.  Let's say you want to get Firefox screenshots from Mac and screenshots from IE 8:

```
--os "OS X" --browser firefox,ie_8
```

Will get you:

* Firefox 20 - Snow Leopard
* Firefox 20 - Lion
* Firefox 20 - Mountain Lion
* IE 8 - Windows 7

You can specify the version with an underscore `_`:

```
--os "OS X_Mountain Lion" --browser firefox,ie_8
```

#### Currently available OS and versions

| Operating System | Version       |
| ---------------- |:-------------:|
| **OS X**         | Snow Leopard  |
| **OS X**         | Lion          |
| **OS X**         | Mountain Lion |
| **Windows**      | XP            |
| **Windows**      | 8             |
| **Windows**      | 7             |
| **ios**          | 5.0           |
| **ios**          | 5.1           |
| **ios**          | 6.0           |
| **android**      | 4.2           |
| **android**      | 4.0           |
| **android**      | 4.1           |
| **android**      | 2.3           |
| **android**      | 2.2           |

### `device`

The device from which you want to take a screenshot.

```
--device "iPhone 5"
```

### Currently available devices in browsers and os versions

| Browser | Device       | OS Version       |
| ---------------- |:-------------:|:-------------:|
| **Mobile Safari** | iPad 2 (5.0) | 5.0|
| **Mobile Safari** | iPhone 4S | 5.1|
| **Mobile Safari** | iPad 3rd | 5.1|
| **Mobile Safari** | iPhone 4S (6.0) | 6.0|
| **Mobile Safari** | iPhone 5 | 6.0|
| **Mobile Safari** | iPad 3rd (6.0) | 6.0|
| **Android Browser** | LG Nexus 4 | 4.2|
| **Android Browser** | Samsung Galaxy Tab 2 10.1 | 4.0|
| **Android Browser** | Samsung Galaxy Nexus | 4.0|
| **Android Browser** | Motorola Atrix HD | 4.0|
| **Android Browser** | Motorola Razr | 4.0|
| **Android Browser** | HTC Evo 3D | 4.0|
| **Android Browser** | HTC One X | 4.0|
| **Android Browser** | Sony Xperia Tipo | 4.0|
| **Android Browser** | Amazon Kindle Fire 2 | 4.0|
| **Android Browser** | Amazon Kindle Fire HD 8.9 | 4.0|
| **Android Browser** | Samsung Galaxy Note 10.1 | 4.0|
| **Android Browser** | Samsung Galaxy S III | 4.1|
| **Android Browser** | Samsung Galaxy Note II | 4.1|
| **Android Browser** | Motorola Razr Maxx HD | 4.1|
| **Android Browser** | Google Nexus 7 | 4.1|
| **Android Browser** | Samsung Galaxy S II | 2.3|
| **Android Browser** | Samsung Galaxy Note | 2.3|
| **Android Browser** | Motorola Droid Razr | 2.3|
| **Android Browser** | Motorola Droid 4 | 2.3|
| **Android Browser** | Samsung Galaxy S | 2.2|
| **Android Browser** | HTC Wildfire | 2.2|
| **Android Browser** | LG Optimus 3D | 2.2|

### `folder`

The folder in which you want to store the screenshots.  The default is the current directory.

```
--folder /tmp
```

### `ls`

This option will ignore the rest of arguments and will output the list of browsers, versions, and OSes available.  Note that you still need to pass username and accesskey arguments.

```
Browser: ie
OS: windows
Versions: 6.0, 7.0, 10.0 Desktop, 8.0, 9.0, 10.0
```
### `tunnel`

Enable local testing via a tunnel from the Internet back to your machine.  Requires that you run the `BrowserStackLocal` client.  See [BrowserStack Local Testing](https://www.browserstack.com/local-testing) for more information and to download binaries.

## Development and Tests

```
npm install
grunt
```

## Credits

Really thanks for the support shown from [BrowserStack](http://www.browserstack.com/) guys, they made this possible.
