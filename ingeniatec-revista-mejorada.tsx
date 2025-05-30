import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  ChevronDown,
  Globe,
  BookOpen,
  Users,
  Award,
  Calendar,
  FileText,
  Star,
  TrendingUp,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-slate-300">Universidad San Francisco Xavier de Chuquisaca</span>
            </div>
            <div className="flex items-center space-x-6">
              {/* Language Selector - Destacado */}
              <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-full">
                <Globe className="w-4 h-4 text-sky-400" />
                <select className="bg-transparent text-white text-sm border-none outline-none cursor-pointer">
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Registrarse
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Simplified */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-gradient-to-r from-teal-500 to-blue-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section with Real Images */}
            <div className="flex items-center space-x-6">
              <img
                src="/images/usfx-logo.png"
                alt="Universidad San Francisco Xavier de Chuquisaca"
                className="h-16 w-16 object-contain"
              />
              <div className="border-l border-slate-300 pl-6">
                <img
                  src="/images/ingeniatec-logo.png"
                  alt="IngeniaTEC - Revista Científica y Técnica"
                  className="h-12 object-contain"
                />
                <p className="text-sm text-slate-600 mt-1">Revista Científica y Técnica</p>
              </div>
            </div>

            {/* Search Bar - Centered and Prominent */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar artículos, autores, temas..."
                  className="pl-12 pr-20 py-3 w-full border-2 border-slate-200 focus:border-sky-500 rounded-xl shadow-sm text-base"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sky-600 hover:bg-sky-700 rounded-lg px-4"
                >
                  Buscar
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FileText className="w-5 h-5 mr-2" />
              Enviar Artículo
            </Button>
          </div>

          {/* Navigation - Simplified */}
          <nav className="flex items-center justify-center space-x-8 mt-4 pt-4 border-t border-slate-100">
            <Link
              href="#"
              className="flex items-center space-x-2 text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-lg hover:bg-sky-50 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Número Actual</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-lg hover:bg-sky-50 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Archivos</span>
            </Link>
            <div className="flex items-center space-x-1 text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-lg hover:bg-sky-50 transition-all cursor-pointer">
              <Users className="w-4 h-4" />
              <span>Acerca de</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-lg hover:bg-sky-50 transition-all cursor-pointer">
              <Award className="w-4 h-4" />
              <span>Para Autores</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link
              href="#"
              className="flex items-center space-x-2 text-slate-700 hover:text-sky-600 font-medium py-2 px-4 rounded-lg hover:bg-sky-50 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contacto</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 via-sky-600 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 leading-tight">Divulgación Científica y Técnica de Excelencia</h2>
            <p className="text-xl mb-8 text-sky-100 leading-relaxed">
              Espacio dedicado al fomento del conocimiento, innovación y avances en diversas áreas de la ciencia y la
              tecnología
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sky-100 text-sm">Volúmenes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sky-100 text-sm">Artículos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sky-100 text-sm">Autores</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sky-100 text-sm">Países</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-xl shadow-lg">
                <Download className="w-5 h-5 mr-2" />
                Último Número
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-sky-600 hover:bg-white hover:text-sky-600 px-8 py-3 rounded-xl"
              >
                Guía para Autores
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-slate-900">Artículos Destacados</h3>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-teal-100 to-sky-100 text-teal-700 px-4 py-2"
                >
                  <Star className="w-4 h-4 mr-1" />
                  Más Leídos
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">Ingeniería Civil</Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Eye className="w-4 h-4 mr-1" />
                        1,234 vistas
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-teal-600 transition-colors">
                      Análisis de Resistencia de Materiales Compuestos en Estructuras de Concreto Armado
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Dr. Carlos Mendoza, Ing. María Fernández • Vol. 8, No. 2 (2024)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      Estudio experimental sobre el comportamiento mecánico de materiales compuestos aplicados en el
                      reforzamiento de estructuras de concreto armado en condiciones sísmicas...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Leer Completo
                      </Button>
                      <div className="flex items-center space-x-3 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Citar
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                        Ingeniería de Sistemas
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Eye className="w-4 h-4 mr-1" />
                        987 vistas
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-orange-600 transition-colors">
                      Machine Learning para Optimización de Procesos Industriales
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Ing. Roberto Silva, Dr. Ana López • Vol. 8, No. 2 (2024)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      Desarrollo e implementación de algoritmos de aprendizaje automático para la optimización de
                      procesos de manufactura en la industria textil boliviana...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Leer Completo
                      </Button>
                      <div className="flex items-center space-x-3 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Citar
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* More Articles */}
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            Ingeniería Ambiental
                          </Badge>
                          <span className="text-sm text-slate-500">Vol. 8, No. 1 (2024)</span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 hover:text-green-600 cursor-pointer transition-colors">
                          Tratamiento de Aguas Residuales Mediante Tecnologías Sostenibles
                        </h4>
                        <p className="text-slate-600 text-sm mb-3">Dra. Patricia Vargas, Ing. Luis Morales</p>
                        <p className="text-slate-600 text-sm line-clamp-2">
                          Evaluación de sistemas de tratamiento de aguas residuales basados en tecnologías verdes...
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="px-8 py-3 rounded-xl">
                  Ver Todos los Artículos
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-50 to-teal-50">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white rounded-lg">
                  <FileText className="w-4 h-4 mr-2" />
                  Enviar Artículo
                </Button>
                <Button variant="outline" className="w-full hover:bg-sky-50 rounded-lg">
                  <Users className="w-4 h-4 mr-2" />
                  Registrarse como Revisor
                </Button>
                <Button variant="outline" className="w-full hover:bg-sky-50 rounded-lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Suscribirse al Boletín
                </Button>
              </CardContent>
            </Card>

            {/* Crossref */}
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="mb-4">
                  <img src="/images/crossref-logo.png" alt="Crossref" className="h-16 mx-auto object-contain" />
                </div>
                <p className="text-xs text-slate-600">Miembro oficial de Crossref para identificadores DOI</p>
              </CardContent>
            </Card>

            {/* Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-sky-600" />
                  Información
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 text-sky-600 hover:text-sky-800 text-sm p-2 rounded-lg hover:bg-sky-50 transition-all"
                    >
                      <Users className="w-4 h-4" />
                      <span>Para lectores/as</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 text-sky-600 hover:text-sky-800 text-sm p-2 rounded-lg hover:bg-sky-50 transition-all"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Para autores/as</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 text-sky-600 hover:text-sky-800 text-sm p-2 rounded-lg hover:bg-sky-50 transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Para bibliotecarios/as</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl font-bold">IngeniaTEC</div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-slate-400 text-sm">
                Revista científica dedicada a la divulgación de investigación en ingeniería y tecnología.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Política Editorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Proceso de Revisión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Ética de Publicación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Acceso Abierto
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
                    Plantillas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Derechos de Autor
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span className="text-slate-400">ingeniatec@usfx.bo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="text-slate-400">Sucre, Bolivia</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 Universidad San Francisco Xavier de Chuquisaca. Todos los derechos reservados.</p>
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
