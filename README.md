# Node.js Random color Generator

Generate random or chosen colors on the command line

##usage

Generate random color:

```bash
$ node index.js
##############################
##############################
##############################
########              ########
########   #71f95e    ########
########              ########
##############################
##############################
##############################
```

Or, choose a hue and luminosity:

```bash
$ node index.js green light
##############################
##############################
##############################
########              ########
########   #71f95e    ########
########              ########
##############################
##############################
##############################
```

If the color chosen does not match with an existing color, an
error message will appear:

```bash
$ node index.js nonexistentcolor
This color does not exist
```
