import pytest
from ex02 import translate_to_number


def test_abc_should_be_converted_in_2():
    assert translate_to_number("ABC") == "222"


def test_def_should_be_converted_in_3():
    assert translate_to_number("DEF") == "333"


def test_expression_should_be_at_least_one_char():
    with pytest.raises(ValueError):
        translate_to_number("")


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        translate_to_number("I-****-MY_JOB")
