import sys


def analyze(in_filename, out_filename):
    try:
        with open(in_filename, "r") as infile:
            contents = infile.readlines()

        no_of_line = no_of_words = no_of_alphabets = no_of_digits = 0
        for line in contents:
            no_of_line += 1
            words = line.split()
            no_of_words += len(words)

            for char in line:
                if char.isalpha():
                    no_of_alphabets += 1
                elif char.isdigit():
                    no_of_digits += 1

        with open(out_filename, "w") as outfile:
            outfile.write(f"Number of lines: {no_of_line}\n")
            outfile.write(f"Number of words: {no_of_words}\n")
            outfile.write(f"Number of alphabets: {no_of_alphabets}\n")
            outfile.write(f"Number of digits: {no_of_digits}\n")

    except FileNotFoundError:
        print("The input file is not found!")
    except OSError as err:
        print(err)
        sys.exit(0)


if __name__ == '__main__':
    analyze('test.txt', 'result.txt')
    with open("result.txt", "r") as outFile:
        print(outFile.read())



#Better: Written by ChatGPT
import sys

def analyze(in_filename, out_filename):
    try:
        with open(in_filename, "r") as infile:
            contents = infile.read()

        lines = contents.splitlines()
        words = contents.split()
        no_of_alphabets = sum(c.isalpha() for c in contents)
        no_of_digits = sum(c.isdigit() for c in contents)

        with open(out_filename, "w") as outfile:
            outfile.write(f"Number of lines: {len(lines)}\n")
            outfile.write(f"Number of words: {len(words)}\n")
            outfile.write(f"Number of alphabets: {no_of_alphabets}\n")
            outfile.write(f"Number of digits: {no_of_digits}\n")

    except FileNotFoundError:
        print("The input file is not found!")
    except OSError as err:
        print(err)
        sys.exit(0)

if __name__ == '__main__':
    analyze('test.txt', 'result.txt')
    with open("result.txt", "r") as outFile:
        print(outFile.read())
