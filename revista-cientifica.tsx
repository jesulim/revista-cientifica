import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Search, Users, Award, Calendar, Download, ExternalLink, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Revista Científica</h1>
                <p className="text-sm text-slate-600">Universidad Nacional de Investigación</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Inicio
              </Link>
              <Link href="#" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Artículos
              </Link>
              <Link href="#" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Números
              </Link>
              <Link href="#" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Autores
              </Link>
              <Link href="#" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Enviar Artículo
              </Link>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Avanzando el Conocimiento Científico</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Publicación académica de excelencia dedicada a la investigación multidisciplinaria y la innovación
              científica en América Latina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Download className="w-5 h-5 mr-2" />
                Último Número
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Guía para Autores
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-slate-600">Años de Publicación</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">1,200+</div>
              <div className="text-slate-600">Artículos Publicados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">45</div>
              <div className="text-slate-600">Países Representados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">2.8</div>
              <div className="text-slate-600">Factor de Impacto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Artículos Destacados</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descubre las últimas investigaciones y avances científicos publicados en nuestra revista
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Biotecnología</Badge>
                  <span className="text-sm text-slate-500">15 Dic 2024</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  Nuevos Enfoques en Terapia Génica para Enfermedades Neurodegenerativas
                </CardTitle>
                <CardDescription>Dr. María González, Dr. Carlos Rodríguez</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Investigación innovadora sobre el uso de vectores virales modificados para el tratamiento de
                  enfermedades como Alzheimer y Parkinson...
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Leer Más
                  </Button>
                  <div className="flex items-center text-sm text-slate-500">
                    <Download className="w-4 h-4 mr-1" />
                    PDF
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Física Cuántica</Badge>
                  <span className="text-sm text-slate-500">10 Dic 2024</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  Computación Cuántica: Algoritmos Híbridos para Optimización
                </CardTitle>
                <CardDescription>Dr. Ana Martínez, Dr. Luis Fernández</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Desarrollo de algoritmos cuánticos-clásicos híbridos que mejoran significativamente la eficiencia en
                  problemas de optimización...
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Leer Más
                  </Button>
                  <div className="flex items-center text-sm text-slate-500">
                    <Download className="w-4 h-4 mr-1" />
                    PDF
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Ciencias Ambientales</Badge>
                  <span className="text-sm text-slate-500">5 Dic 2024</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  Impacto del Cambio Climático en Ecosistemas Marinos Tropicales
                </CardTitle>
                <CardDescription>Dra. Carmen López, Dr. Roberto Silva</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Análisis comprehensivo de los efectos del calentamiento global en la biodiversidad marina del Caribe y
                  propuestas de conservación...
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Leer Más
                  </Button>
                  <div className="flex items-center text-sm text-slate-500">
                    <Download className="w-4 h-4 mr-1" />
                    PDF
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Ver Todos los Artículos
            </Button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Áreas de Investigación</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nuestra revista abarca múltiples disciplinas científicas y fomenta la investigación interdisciplinaria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Ciencias Exactas</h4>
                <p className="text-sm text-slate-600">Matemáticas, Física, Química</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Ciencias de la Vida</h4>
                <p className="text-sm text-slate-600">Biología, Medicina, Biotecnología</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-slate-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Ingeniería</h4>
                <p className="text-sm text-slate-600">Tecnología, Innovación, Desarrollo</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Ciencias Ambientales</h4>
                <p className="text-sm text-slate-600">Ecología, Sostenibilidad, Clima</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Editorial Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Proceso Editorial</h3>
              <p className="text-lg text-slate-600">
                Mantenemos los más altos estándares de calidad académica a través de un riguroso proceso de revisión por
                pares
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Envío y Evaluación Inicial</h4>
                <p className="text-slate-600">
                  Revisión editorial inicial para verificar que el manuscrito cumple con los estándares de la revista
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Revisión por Pares</h4>
                <p className="text-slate-600">
                  Evaluación rigurosa por expertos en el campo para garantizar la calidad y originalidad de la
                  investigación
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Publicación</h4>
                <p className="text-slate-600">
                  Una vez aprobado, el artículo se publica en formato digital y se distribuye a la comunidad científica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Mantente Informado</h3>
            <p className="text-emerald-100 mb-8">
              Suscríbete a nuestro boletín para recibir notificaciones sobre nuevas publicaciones y eventos académicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-white text-slate-900 border-0" />
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white">Suscribirse</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Revista Científica</h4>
                  <p className="text-sm text-slate-400">Universidad Nacional</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Promoviendo la excelencia en investigación científica desde 1999</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Comité Editorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Política de Acceso Abierto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Ética de Publicación
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Para Autores</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Guía de Envío
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Formato de Artículos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Proceso de Revisión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Derechos de Autor
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">revista@universidad.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">Ciudad Universitaria, Campus Central</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 Universidad Nacional de Investigación. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Términos de Uso
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Accesibilidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
