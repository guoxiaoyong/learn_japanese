import os
import tornado.web
import tornado.ioloop


def break_line(line):
  comps = line.strip().split()
  return comps[0], ' '.join(comps[1:])


def load_words():
  file_name = 'simple_words.txt'
  with open(file_name) as rfile:
    lines = rfile.readlines()
  return [break_line(line) for line in lines]


class IndexHandler(tornado.web.RequestHandler):
  def get(self):
    words = load_words()
    return self.render('index.html', words=words)


def create_webapp(port):
  settings = dict(
      template_path=os.path.join(os.path.dirname(__file__), "template"),
      static_path=os.path.join(os.path.dirname(__file__), "static"),
      debug=True
  )
  application = tornado.web.Application(
      [(r'/', IndexHandler)],
      **settings
  )
  application.listen(port)


if __name__ == '__main__':
  create_webapp(9898)
  tornado.ioloop.IOLoop.current().start()
