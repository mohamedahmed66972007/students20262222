import React from "react";
import { useFiles } from "@/hooks/useFiles";
import { useExams } from "@/hooks/useExams";
import { useQuizzes } from "@/hooks/useQuizzes";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCard } from "@/components/FileCard";
import ExamWeek from "@/components/ExamWeek";
import QuizCard from "@/components/QuizCard";

export default function Home() {
  const { files } = useFiles();
  const { examWeeks, exams } = useExams();
  const { quizzes } = useQuizzes();

  const latestFiles = files?.slice(0, 3) || [];
  const latestExamWeek = examWeeks?.[0];
  const latestExams = exams?.filter(exam => exam.weekId === latestExamWeek?.id) || [];
  const latestQuizzes = quizzes?.slice(0, 3) || [];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">لوحة التحكم</h1>

      <div className="grid gap-6">
        {/* Latest Files */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">أحدث الملفات</h2>
            <Button variant="outline" asChild>
              <Link href="/files">عرض الكل</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestFiles.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
            {latestFiles.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  لا توجد ملفات
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Latest Exam Week */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">أحدث جدول اختبارات</h2>
            <Button variant="outline" asChild>
              <Link href="/exams">عرض الكل</Link>
            </Button>
          </div>
          {latestExamWeek ? (
            <ExamWeek week={latestExamWeek} exams={latestExams} />
          ) : (
            <Card>
              <CardContent className="p-6 text-center text-muted-foreground">
                لا توجد اختبارات
              </CardContent>
            </Card>
          )}
        </section>

        {/* Latest Quizzes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">أحدث الاختبارات الإلكترونية</h2>
            <Button variant="outline" asChild>
              <Link href="/quizzes">عرض الكل</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
            {latestQuizzes.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  لا توجد اختبارات قصيرة
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}