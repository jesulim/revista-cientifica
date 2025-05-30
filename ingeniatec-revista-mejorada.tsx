import Link from "next/link"
import {
  Globe,
  Search,
  FileText,
  BookOpen,
  Calendar,
  Users,
  Award,
  Mail,
  ChevronDown,
  Download,
  Star,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Eye, TrendingUp } from "lucide-react"

const IngeniatecRevistaMejorada = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden sm:flex items-center space-x-4">
              <span className="text-slate-300">Universidad San Francisco Xavier de Chuquisaca</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 ml-auto">
              {/* Language Selector - Destacado */}
              <div className="flex items-center space-x-2 bg-slate-800 px-2 sm:px-3 py-1 rounded-full">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
                <select className="bg-transparent text-white text-xs sm:text-sm border-none outline-none cursor-pointer">
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
              </div>
              <div className="hidden sm:flex items-center space-x-6">
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
      </div>

      {/* Main Header - Mobile Optimized */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-gradient-to-r from-teal-500 to-blue-500">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section - Mobile Optimized */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <img
                src="/images/usfx-logo.png"
                alt="Universidad San Francisco Xavier de Chuquisaca"
                className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
              />
              <div className="border-l border-slate-300 pl-3 sm:pl-6">
                <img
                  src="/images/ingeniatec-logo.png"
                  alt="IngeniaTEC - Revista Científica y Técnica"
                  className="h-8 sm:h-12 object-contain"
                />
                <p className="text-xs sm:text-sm text-slate-600 mt-1 hidden sm:block">Revista Científica y Técnica</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:hidden">
              <Button size="sm" variant="outline" className="p-2">
                <Search className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-teal-600 to-sky-600 text-white p-2">
                <FileText className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop Search and CTA */}
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-8 flex-1 max-w-lg mx-8">
              <div className="relative flex-1">
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

            <div className="hidden sm:block">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white px-4 lg:px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                <span className="hidden lg:inline">Enviar Artículo</span>
                <span className="lg:hidden">Enviar</span>
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="mt-3 sm:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 w-full border-2 border-slate-200 focus:border-sky-500 rounded-lg"
              />
            </div>
          </div>

          {/* Navigation - Mobile Optimized */}
          <nav className="hidden sm:flex items-center justify-center space-x-4 lg:space-x-8 mt-4 pt-4 border-t border-slate-100">
            <Link
              href="#"
              className="flex items-center space-x-2 text-slate-700 hover:text-sky-600 font-medium py-2 px-2 lg:px-4 rounded-lg hover:bg-sky-50 transition-all text-sm lg:text-base"
            >
              <BookOpen className="w-4 h-4" />
              <span>Actual</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-slate-700 hover:text-sky-600 font-medium py-2 px-2 lg:px-4 rounded-lg hover:bg-sky-50 transition-all text-sm lg:text-base"
            >
              <Calendar className="w-4 h-4" />
              <span>Archivos</span>
            </Link>
            <div className="flex items-center space-x-1 text-slate-700 hover:text-sky-600 font-medium py-2 px-2 lg:px-4 rounded-lg hover:bg-sky-50 transition-all cursor-pointer text-sm lg:text-base">
              <Users className="w-4 h-4" />
              <span>Acerca de</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-slate-700 hover:text-sky-600 font-medium py-2 px-2 lg:px-4 rounded-lg hover:bg-sky-50 transition-all cursor-pointer text-sm lg:text-base">
              <Award className="w-4 h-4" />
              <span>Autores</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link
              href="#"
              className="flex items-center space-x-2 text-slate-700 hover:text-sky-600 font-medium py-2 px-2 lg:px-4 rounded-lg hover:bg-sky-50 transition-all text-sm lg:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>Contacto</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-r from-teal-600 via-sky-600 to-blue-600 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Divulgación Científica y Técnica de Excelencia
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-sky-100 leading-relaxed px-4 sm:px-0">
              Espacio dedicado al fomento del conocimiento, innovación y avances en diversas áreas de la ciencia y la
              tecnología
            </p>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold">8+</div>
                <div className="text-sky-100 text-xs sm:text-sm">Volúmenes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold">150+</div>
                <div className="text-sky-100 text-xs sm:text-sm">Artículos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold">200+</div>
                <div className="text-sky-100 text-xs sm:text-sm">Autores</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold">15+</div>
                <div className="text-sky-100 text-xs sm:text-sm">Países</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-3 rounded-xl shadow-lg text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Último Número
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-3 rounded-xl shadow-lg text-sm sm:text-base"
              >
                Guía para Autores
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Featured Articles */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Artículos Destacados</h3>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-teal-100 to-sky-100 text-teal-700 px-3 sm:px-4 py-2 self-start sm:self-auto"
                >
                  <Star className="w-4 h-4 mr-1" />
                  Más Leídos
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Cards optimizadas para móvil */}
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 space-y-2 sm:space-y-0">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 self-start">Ingeniería Civil</Badge>
                      <div className="flex items-center text-xs sm:text-sm text-slate-500">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        1,234 vistas
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight group-hover:text-teal-600 transition-colors">
                      Análisis de Resistencia de Materiales Compuestos en Estructuras de Concreto Armado
                    </CardTitle>
                    <div className="text-sm sm:text-base text-slate-600">
                      Dr. Carlos Mendoza, Ing. María Fernández • Vol. 8, No. 2 (2024)
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm sm:text-base line-clamp-3">
                      Estudio experimental sobre el comportamiento mecánico de materiales compuestos aplicados en el
                      reforzamiento de estructuras de concreto armado en condiciones sísmicas...
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 text-xs sm:text-sm w-full sm:w-auto"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Leer Completo
                      </Button>
                      <div className="flex items-center justify-center sm:justify-end space-x-4 text-xs sm:text-sm text-slate-500">
                        <div className="flex items-center">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          PDF
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Citar
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 space-y-2 sm:space-y-0">
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 self-start">
                        Ingeniería de Sistemas
                      </Badge>
                      <div className="flex items-center text-xs sm:text-sm text-slate-500">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        987 vistas
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight group-hover:text-orange-600 transition-colors">
                      Machine Learning para Optimización de Procesos Industriales
                    </CardTitle>
                    <div className="text-sm sm:text-base text-slate-600">
                      Ing. Roberto Silva, Dr. Ana López • Vol. 8, No. 2 (2024)
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm sm:text-base line-clamp-3">
                      Desarrollo e implementación de algoritmos de aprendizaje automático para la optimización de
                      procesos de manufactura en la industria textil boliviana...
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300 text-xs sm:text-sm w-full sm:w-auto"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Leer Completo
                      </Button>
                      <div className="flex items-center justify-center sm:justify-end space-x-4 text-xs sm:text-sm text-slate-500">
                        <div className="flex items-center">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          PDF
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Citar
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* More Articles - Mobile Optimized */}
              <div className="space-y-3 sm:space-y-4">
                <Card className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between space-y-3 sm:space-y-0">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-700 self-start">
                            Ingeniería Ambiental
                          </Badge>
                          <span className="text-xs sm:text-sm text-slate-500">Vol. 8, No. 1 (2024)</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 hover:text-green-600 cursor-pointer transition-colors">
                          Tratamiento de Aguas Residuales Mediante Tecnologías Sostenibles
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm mb-2 sm:mb-3">
                          Dra. Patricia Vargas, Ing. Luis Morales
                        </p>
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                          Evaluación de sistemas de tratamiento de aguas residuales basados en tecnologías verdes...
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 sm:ml-4 self-start sm:self-auto">
                        <Button variant="ghost" size="sm" className="p-2">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between space-y-3 sm:space-y-0">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700 self-start">
                            Ingeniería Mecánica
                          </Badge>
                          <span className="text-xs sm:text-sm text-slate-500">Vol. 8, No. 1 (2024)</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                          Diseño y Simulación de Sistemas de Energía Renovable
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm mb-2 sm:mb-3">
                          Dr. Miguel Torres, Ing. Ana Rojas
                        </p>
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                          Análisis computacional de sistemas híbridos solar-eólicos para comunidades rurales del
                          altiplano...
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 sm:ml-4 self-start sm:self-auto">
                        <Button variant="ghost" size="sm" className="p-2">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base">
                  Ver Todos los Artículos
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar - Mobile Optimized */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Quick Actions - Mobile First */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-50 to-teal-50">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg text-slate-900">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <Button className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white rounded-lg text-sm sm:text-base py-2 sm:py-3">
                  <FileText className="w-4 h-4 mr-2" />
                  Enviar Artículo
                </Button>
                <Button
                  variant="outline"
                  className="w-full hover:bg-sky-50 rounded-lg text-sm sm:text-base py-2 sm:py-3"
                >
                  <Users className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Registrarse como Revisor</span>
                  <span className="sm:hidden">Ser Revisor</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full hover:bg-sky-50 rounded-lg text-sm sm:text-base py-2 sm:py-3"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Suscribirse al Boletín</span>
                  <span className="sm:hidden">Boletín</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Footer - Mobile Optimized */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-xl sm:text-2xl font-bold">IngeniaTEC</div>
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
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces Rápidos</h5>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
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
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Para Autores</h5>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
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
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h5>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400 flex-shrink-0" />
                  <span className="text-slate-400 break-all">ingeniatec@usfx.bo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400 flex-shrink-0" />
                  <span className="text-slate-400">Sucre, Bolivia</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6 sm:my-8 bg-slate-700" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-slate-400 space-y-4 sm:space-y-0">
            <p className="text-center sm:text-left">
              &copy; 2025 Universidad San Francisco Xavier de Chuquisaca. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
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

export default IngeniatecRevistaMejorada
