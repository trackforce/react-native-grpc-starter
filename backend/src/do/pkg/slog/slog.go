package slog

import (
	"os"

	"github.com/sirupsen/logrus"
)

func Init() {
	logrus.SetFormatter(&logrus.TextFormatter{})
	logrus.SetOutput(os.Stdout)
	logrus.SetLevel(logrus.InfoLevel)
}

func Errorf(format string, args ...interface{}) {
	logrus.Errorf(format, args)
}

func Fatalf(format string, args ...interface{}) {
	logrus.Fatalf(format, args)
}

func Infof(format string, args ...interface{}) {
	logrus.Infof(format, args)
}
