"""
Exercise 1: Read a file and output a file telling
number of lines, words, alphabets and digits
"""
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

#Exercise 2: Read a csv file and output a dictionary
def get_final_grades(filename='grades.csv'):
    try:
        with open(filename, 'r') as file:
            contents = file.readlines()

        weights = [0.2, 0.25, 0.25, 0.3]
        students_grades = {
            line.strip().split(',')[0]: sum(
                (float(score) if score != '-1' else 0) * weight
                for score, weight in zip(line.strip().split(',')[1:], weights)
            ) for line in contents
        }

    except FileNotFoundError:
        print("The grade sheet file is not found!")
        return None
    except OSError as err:
        print(err)
        return None

    return students_grades

#Exercise 3: Calculate the salary of employee
from abc import ABC, abstractmethod

class Employee(ABC):
    def __init__(self, staff_id, name):
        self.staff_id, self.name = staff_id, name

    @abstractmethod
    def earnings(self):
        pass

class SalariedEmployee(Employee):
    def __init__(self, staff_id, name, salary):
        super().__init__(staff_id, name)
        self.salary = salary

    def earnings(self):
        return int(self.salary)

class HourlyEmployee(Employee):
    def __init__(self, staff_id, name, hourly_rate, hours_worked):
        super().__init__(staff_id, name)
        self.hourly_rate, self.hours_worked = hourly_rate, hours_worked

    def earnings(self):
        return int(float(self.hourly_rate) * int(self.hours_worked))

class CommissionEmployee(Employee):
    def __init__(self, staff_id, name, salary, commission_rate, gross_sales):
        super().__init__(staff_id, name)
        self.salary, self.commission_rate, self.gross_sales = salary, commission_rate, gross_sales

    def earnings(self):
        return int(self.salary + float(self.commission_rate) * int(self.gross_sales))

#Exercise 4: Build a quiz system and calcuate the total marks
from abc import ABC, abstractmethod
import statistics


class Question(ABC):
    def __init__(self, prompt, __answer):
        self.prompt = prompt
        self.__answer = __answer

    @abstractmethod
    def __str__(self):
        pass

    def check(self, attempt):
        return attempt.strip() == self.__answer


class FillInTheBlank(Question):
    def __str__(self):
        return f"{self.prompt}\nYour answer: "


class MultipleChoice(Question):
    def __init__(self, prompt, __answer, choices):
        super().__init__(prompt, __answer)
        self.choices = choices
        self.__answer = __answer

    def __str__(self):
        letter_str = "\t".join([f"{chr(65 + i)}. {choice}" for i, choice in enumerate(self.choices)])
        return f"{self.prompt}\n{letter_str}\nYour choice: "

    def check(self, attempt):
        if not attempt:
            print("Invalid choice!")
            return None
        elif attempt not in "ABCDabcd":
            print("Invalid choice!")
            return None
        else:
            index = ord(attempt.upper()) - ord("A")
            return self.choices[index] == self.__answer


class Quiz:
    count = 0

    def __init__(self, subject, questions, weights):
        self.subject = subject
        self.questions = questions
        self.weights = weights
        self.records = {}
        Quiz.count += 1

    def get_stats(self):
        scores = list(self.records.values())
        v1 = max(scores)
        v2 = min(scores)
        v3 = round(statistics.mean(scores), 1)
        v4 = round(statistics.stdev(scores), 1)
        return {
            'max': v1,
            'min': v2,
            'mean': v3,
            'stdev': v4
        }


class Student:
    count = 0

    def __init__(self, name, sid):
        self.name = name
        self.sid = sid
        self.grades = {}
        Student.count += 1

    def take_quiz(self, quiz):
        score = 0
        for i, question in enumerate(quiz.questions):
            weighted_score = quiz.weights[i]*100
            print(f"Question {i + 1} ({round(weighted_score)}%)")
            print(question, end="")
            attempt = input().strip()
            correct = question.check(attempt)
            if correct:
                print("Correct!")
                score += weighted_score
            else:
                print("Wrong!")

        self.grades[quiz.subject] = round(score)
        quiz.records[self.sid] = round(score)

        
