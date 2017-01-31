import os

i = 0
for filename in os.listdir("."):
    if (filename[0:-4].endswith("Small") or filename[0:-4].endswith("small")):
        newFilename = filename[0:-9] + filename[-3:]
        os.rename(filename, newFilename) #rename the file with its extension
        i += 1

print(i, "files have been renamed")
